import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Use conditional import for Replit-specific plugins
const replitPlugins = [];
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  try {
    const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal").then(m => m.default);
    replitPlugins.push(runtimeErrorOverlay());
    
    const cartographer = await import("@replit/vite-plugin-cartographer").then(m => m.cartographer);
    replitPlugins.push(cartographer());
  } catch (e) {
    console.log("Replit plugins not available, skipping...");
  }
}

export default defineConfig({
  plugins: [
    react(),
    ...replitPlugins
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@shared": path.resolve("../shared"),
      "@assets": path.resolve("../attached_assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});