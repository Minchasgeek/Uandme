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
    path = path.split("?")[0] || "/"; // ✅ clave para /piezas?...

    render(match(path));
  }

  window.addEventListener("hashchange", onChange);
  onChange();
}