import { createProxyMiddleware } from "http-proxy-middleware";
module.exports = function setupProxy(app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
