import { type RouteConfig } from "@remix-run/route-config";
import { remixRoutesOptionAdapter } from "@remix-run/routes-option-adapter";
import { flatRoutes } from "remix-flat-routes";

export const routes: RouteConfig = remixRoutesOptionAdapter((defineRoutes) =>
  flatRoutes("routes", defineRoutes, {
    ignoredRouteFiles: [
      ".*",
      "**/*.css",
      "**/*.test.{js,jsx,ts,tsx}",
      "**/__*.*",
      // This is for server-side utilities you want to colocate
      // next to your routes without making an additional
      // directory. If you need a route that includes "server" or
      // "client" in the filename, use the escape brackets like:
      // my-route.[server].tsx
      "**/*.server.*",
      "**/*.client.*",
    ],
  })
);
