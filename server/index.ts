import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// 🧩 لضمان أن req.rawBody متاح
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// 📦 إعداد الـ body parsers
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false }));

// 🧠 Middleware لتسجيل الطلبات في الـ API
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 120) logLine = logLine.slice(0, 119) + "…";
      log(logLine);
    }
  });

  next();
});

// ⚙️ بدء السيرفر
(async () => {
  const server = await registerRoutes(app);

  // 🎯 التعامل مع الأخطاء العامة
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    log(`❌ Error ${status}: ${message}`);
  });

  // ⚡ في وضع التطوير: نستخدم Vite
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // 📁 في وضع الإنتاج: نخدم الملفات الجاهزة من build
    serveStatic(app);
  }

  // 🌍 تحديد المنفذ
  const port = parseInt(process.env.PORT || "5000", 10);

  // ✅ متوافق مع كل الأنظمة
  const host =
    process.platform === "win32" || process.env.NODE_ENV === "development"
      ? "localhost"
      : "0.0.0.0";

  server.listen(port, host, () => {
    log(`✅ Server running on http://${host}:${port}`);
  });
})();
