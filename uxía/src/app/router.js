const routes = [];

export function addRoute(pattern, name) {
  routes.push({ pattern, name });
}

function match(path) {
  for (const r of routes) {
    const m = path.match(r.pattern);
    if (m) return { name: r.name, params: m.groups || {} };
  }
  return { name: "notfound", params: {} };
}

export function startRouter(render) {
  function onChange() {
    let path = location.hash.replace(/^#/, "") || "/";
    path = path.split("?")[0] || "/";

    render(match(path));

    // ✅ fuerza inicio arriba en cada navegación
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  window.addEventListener("hashchange", onChange);
  onChange();
}