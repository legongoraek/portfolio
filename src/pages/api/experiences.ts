import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false;

const experiencesPath = path.join(process.cwd(), 'src/data/experiences.json');

interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  impact: string[];
  icon: string;
}

async function parseJsonBody<T>(request: Request): Promise<T | null> {
  try {
    const rawBody = await request.text();
    const normalizedBody = rawBody.replace(/^\uFEFF/, '').trim();
    if (!normalizedBody) return null;
    return JSON.parse(normalizedBody) as T;
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request, cookies }) => {
  const isAuthenticated = cookies.get('admin_auth')?.value === '1';
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const newExperience = await parseJsonBody<Experience>(request);

    if (!newExperience) {
      return new Response(
        JSON.stringify({ error: 'Body JSON inválido o vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar datos requeridos
    if (!newExperience.role || !newExperience.company || !newExperience.period) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Leer archivo JSON actual
    const fileContent = await fs.readFile(experiencesPath, 'utf-8');
    const experiences: Experience[] = JSON.parse(fileContent);

    // Agregar nueva experiencia
    experiences.push(newExperience);

    // Escribir archivo JSON actualizado
    await fs.writeFile(experiencesPath, JSON.stringify(experiences, null, 2), 'utf-8');

    return new Response(
      JSON.stringify({ success: true, message: 'Experiencia agregada exitosamente' }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error al agregar experiencia:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
  const isAuthenticated = cookies.get('admin_auth')?.value === '1';
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method !== 'DELETE') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const payload = await parseJsonBody<{ role?: string; company?: string }>(request);

    if (!payload) {
      return new Response(
        JSON.stringify({ error: 'Body JSON inválido o vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { role, company } = payload;

    if (!role || !company) {
      return new Response(
        JSON.stringify({ error: 'Role y company son requeridos para eliminar' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Leer archivo JSON actual
    const fileContent = await fs.readFile(experiencesPath, 'utf-8');
    let experiences: Experience[] = JSON.parse(fileContent);

    // Filtrar la experiencia a eliminar
    const initialLength = experiences.length;
    experiences = experiences.filter((e) => !(e.role === role && e.company === company));

    if (experiences.length === initialLength) {
      return new Response(
        JSON.stringify({ error: 'Experiencia no encontrada' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Escribir archivo JSON actualizado
    await fs.writeFile(experiencesPath, JSON.stringify(experiences, null, 2), 'utf-8');

    return new Response(
      JSON.stringify({ success: true, message: 'Experiencia eliminada exitosamente' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error al eliminar experiencia:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
