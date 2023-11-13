// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     ["/api", "/auth/google"],
//     createProxyMiddleware({
//       target: "http://localhost:5000",
//     })
//   );
// };

// import { createProxyMiddleware } from "http-proxy-middleware";
// export default function setupProxy(app) {
//   app.use(
//     ["/api", "/auth/google"],
//     createProxyMiddleware({
//       target: "http://localhost:3000",
//       changeOrigin: true,
//     })
//   );
// }
