import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({


  server: {
    proxy: {
      '/server': {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },


  plugins: [react(), nodePolyfills()],
});
