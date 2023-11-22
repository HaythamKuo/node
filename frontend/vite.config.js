import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/auth/google": {
        target: "http://localhost:4000",
      },
      "/api": {
        target: "http://localhost:4000",
      },
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     proxy: {
//       "/api/*": {
//         target: "http://localhost:4000",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api\//, "/"),
//         //secure: false,
//       },
//       "/auth/google": {
//         target: "http://localhost:4000",
//         changeOrigin: true,
//         //secure: false,
//         rewrite: (path) => path.replace(/^\/auth\/google/, "/auth/google"),
//       },
//     },
//     port: 3000,
//   },
// });
