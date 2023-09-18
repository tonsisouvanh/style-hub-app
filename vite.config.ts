import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    outDir: "build",
  },
});
