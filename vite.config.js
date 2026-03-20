import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        specialists: resolve(__dirname, 'specialists/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contacts: resolve(__dirname, 'contacts/index.html'),
        notfound: resolve(__dirname, '404.html'),
        enMain: resolve(__dirname, 'en/index.html'),
        enSpecialists: resolve(__dirname, 'en/specialists/index.html'),
        enServices: resolve(__dirname, 'en/services/index.html'),
        enAbout: resolve(__dirname, 'en/about/index.html'),
        enContacts: resolve(__dirname, 'en/contacts/index.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
