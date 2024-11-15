import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { remixDevTools } from 'remix-development-tools'

const MODE = process.env.NODE_ENV
const IS_PROD = MODE === 'production'

export default defineConfig({
  build: {
    cssMinify: IS_PROD,
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    remixDevTools({ suppressDeprecationWarning: true }),
    remix({
      serverModuleFormat: 'esm',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
        unstable_routeConfig: true,
        unstable_optimizeDeps: true,
      },
    }),
    tsconfigPaths(),
  ],
})
