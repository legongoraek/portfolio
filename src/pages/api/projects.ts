import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false;

const projectsPath = path.join(process.cwd(), 'src/data/projects.json');

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string[];
  link: string;
  category: string;
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
    const newProject = await parseJsonBody<Project>(request);

    if (!newProject) {
      return new Response(
        JSON.stringify({ error: 'Body JSON inválido o vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar datos requeridos
    if (!newProject.title || !newProject.description || !newProject.link) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Leer archivo JSON actual
    const fileContent = await fs.readFile(projectsPath, 'utf-8');
    const projects: Project[] = JSON.parse(fileContent);

    // Agregar nuevo proyecto
    projects.push(newProject);

    // Escribir archivo JSON actualizado
    await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2), 'utf-8');

    return new Response(
      JSON.stringify({ success: true, message: 'Proyecto agregado exitosamente' }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error al agregar proyecto:', error);
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
    const payload = await parseJsonBody<{ title?: string }>(request);

    if (!payload) {
      return new Response(
        JSON.stringify({ error: 'Body JSON inválido o vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { title } = payload;

    if (!title) {
      return new Response(
        JSON.stringify({ error: 'Título requerido para eliminar' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Leer archivo JSON actual
    const fileContent = await fs.readFile(projectsPath, 'utf-8');
    let projects: Project[] = JSON.parse(fileContent);

    // Filtrar el proyecto a eliminar
    const initialLength = projects.length;
    projects = projects.filter((p) => p.title !== title);

    if (projects.length === initialLength) {
      return new Response(
        JSON.stringify({ error: 'Proyecto no encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Escribir archivo JSON actualizado
    await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2), 'utf-8');

    return new Response(
      JSON.stringify({ success: true, message: 'Proyecto eliminado exitosamente' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error al eliminar proyecto:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
