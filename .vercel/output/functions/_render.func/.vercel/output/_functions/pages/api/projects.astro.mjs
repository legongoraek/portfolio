import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const projectsPath = path.join(process.cwd(), "src/data/projects.json");
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
    const newProject = await parseJsonBody(request);
    if (!newProject) {
      return new Response(
        JSON.stringify({ error: "Body JSON inválido o vacío" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!newProject.title || !newProject.description || !newProject.link) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const fileContent = await fs.readFile(projectsPath, "utf-8");
    const projects = JSON.parse(fileContent);
    projects.push(newProject);
    await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2), "utf-8");
    return new Response(
      JSON.stringify({ success: true, message: "Proyecto agregado exitosamente" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error al agregar proyecto:", error);
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
    const { title } = payload;
    if (!title) {
      return new Response(
        JSON.stringify({ error: "Título requerido para eliminar" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const fileContent = await fs.readFile(projectsPath, "utf-8");
    let projects = JSON.parse(fileContent);
    const initialLength = projects.length;
    projects = projects.filter((p) => p.title !== title);
    if (projects.length === initialLength) {
      return new Response(
        JSON.stringify({ error: "Proyecto no encontrado" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2), "utf-8");
    return new Response(
      JSON.stringify({ success: true, message: "Proyecto eliminado exitosamente" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error al eliminar proyecto:", error);
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
