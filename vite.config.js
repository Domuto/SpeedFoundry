import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite config — React + Tailwind CSS v4.
// You shouldn't need to touch this file.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
