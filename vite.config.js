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
              return "vendor";
            }
          },
        },
      },
      minify: "terser",
    },
});
