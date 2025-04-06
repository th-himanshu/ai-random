import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), compression({ algorithm: "brotliCompress" })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("lodash")) return "vendor-lodash";
            if (id.includes("framer-motion")) return "vendor-framer-motion";
            if (id.includes("@react-three")) return "vendor-react-three";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit
    minify: "terser",
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
  },
});
