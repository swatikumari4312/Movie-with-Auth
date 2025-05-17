import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',                // ✅ Required
    port: parseInt(process.env.PORT) || 5173, // ✅ Use PORT env variable
    allowedHosts: ['movie-with-auth.onrender.com'] // ✅ If needed
  },
  preview: {
    host: '0.0.0.0',                // ✅ For 'vite preview' command
    port: parseInt(process.env.PORT) || 5173
  }
})