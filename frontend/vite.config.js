// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 3000,
//     proxy: {
//       "/auth/google/callback": {
//         target: "http://localhost:4000",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/auth/google": {
        target: "http://localhost:4000",
        changeOrigin: true,
        //secure: false,
        rewrite: (path) => path.replace(/^\/auth\/google/, "/auth/google"),
      },
      "/test": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
    port: 3000,
  },
});
