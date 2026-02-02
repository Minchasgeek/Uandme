const routes = [];

export function addRoute(pattern, handlerName) {
  routes.push({ pattern, handlerName });
}

function matchRoute(path) {
  for (const r of routes) {
    const match = path.match(r.pattern);
    if (match) return { name: r.handlerName, params: match.groups || {} };
  }
  return { name: "notfound", params: {} };
}

export function startRouter(render) {
  function onChange() {
    const path = location.hash.replace(/^#/, "") || "/";
    render(matchRoute(path));
  }

  window.addEventListener("hashchange", onChange);
  onChange();
}
