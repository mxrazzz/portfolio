import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    // For SPA client-side routing (fallback to index.html)
    proxy: {},
    fs: {
      allow: [".."],
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
