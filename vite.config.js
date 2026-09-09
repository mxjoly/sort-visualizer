import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Generates and registers a service worker precaching the build output,
    // the way create-react-app's workbox GenerateSW step used to.
    VitePWA({
      injectRegister: 'auto',
      filename: 'service-worker.js', // same URL create-react-app served, so old registrations update in place
      manifest: false, // public/manifest.json is already linked from index.html
    }),
  ],
  // Keep the create-react-app output directory so existing deploys still work.
  build: { outDir: 'build' },
  server: { port: 3000 },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
