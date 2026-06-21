import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const experiencesPath = path.join(process.cwd(), "src/data/experiences.json");
async function parseJsonBody(request) {
  try {
    const rawBody = await request.text();
    const normalizedBody = rawBody.replace(/^\uFEFF/, "").trim();
    if (!normalizedBody) return null;
    return JSON.parse(normalizedBody);
  } catch {
    return null;
  }
}
const POST = async ({ request, cookies }) => {
  const isAuthenticated = cookies.get("admin_auth")?.value === "1";
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: "No autorizado" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const newExperience = await parseJsonBody(request);
    if (!newExperience) {
      return new Response(
        JSON.stringify({ error: "Body JSON inválido o vacío" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!newExperience.role || !newExperience.company || !newExperience.period) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const fileContent = await fs.readFile(experiencesPath, "utf-8");
    const experiences = JSON.parse(fileContent);
    experiences.push(newExperience);
    await fs.writeFile(experiencesPath, JSON.stringify(experiences, null, 2), "utf-8");
    return new Response(
      JSON.stringify({ success: true, message: "Experiencia agregada exitosamente" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error al agregar experiencia:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const DELETE = async ({ request, cookies }) => {
  const isAuthenticated = cookies.get("admin_auth")?.value === "1";
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: "No autorizado" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (request.method !== "DELETE") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const payload = await parseJsonBody(request);
    if (!payload) {
      return new Response(
        JSON.stringify({ error: "Body JSON inválido o vacío" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { role, company } = payload;
    if (!role || !company) {
      return new Response(
        JSON.stringify({ error: "Role y company son requeridos para eliminar" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const fileContent = await fs.readFile(experiencesPath, "utf-8");
    let experiences = JSON.parse(fileContent);
    const initialLength = experiences.length;
    experiences = experiences.filter((e) => !(e.role === role && e.company === company));
    if (experiences.length === initialLength) {
      return new Response(
        JSON.stringify({ error: "Experiencia no encontrada" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    await fs.writeFile(experiencesPath, JSON.stringify(experiences, null, 2), "utf-8");
    return new Response(
      JSON.stringify({ success: true, message: "Experiencia eliminada exitosamente" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error al eliminar experiencia:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
