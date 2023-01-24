import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => {
  return {
    root: "./src",
    publicDir: "../public",
    base: "/",
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, "./src/index.html"),
        },
      },
      outDir: "../dist",
      emptyOutDir: true,
    },
    server: {
      host: true,
    },
  }
})
