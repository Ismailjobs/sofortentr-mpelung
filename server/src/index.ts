import "./load-env.js";

import path from "node:path";
import { fileURLToPath } from "node:url";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { submitContactRequest, type ContactPayload } from "../../shared/contact/submit-contact.js";

/** Projektwurzel: server/src → ../.. (.env.local neu laden ohne kompletten API-Neustart) */
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

const app = express();
app.use(express.json({ limit: "128kb" }));

const corsOrigins = process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()).filter(Boolean);
app.use(
  cors({
    origin: corsOrigins && corsOrigins.length > 0 ? corsOrigins : true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "contact-api" });
});

app.post("/api/contact", async (req, res) => {
  dotenv.config({ path: path.join(REPO_ROOT, ".env.local") });
  dotenv.config({ path: path.join(REPO_ROOT, ".env") });

  const forwarded = req.headers["x-forwarded-for"];
  const remoteIp =
    typeof forwarded === "string"
      ? forwarded.split(",")[0]?.trim()
      : Array.isArray(forwarded)
        ? forwarded[0]?.trim()
        : undefined;
  const clientIp = remoteIp || req.socket.remoteAddress;

  const result = await submitContactRequest(req.body as ContactPayload, {
    remoteIp: clientIp ?? undefined,
  });
  if (!result.ok) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[contact-api] ${result.status}: ${result.error}`);
    }
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json({ ok: true });
});

const port = Number(process.env.PORT) || 4000;
const host = process.env.HOST ?? "0.0.0.0";

const server = app.listen(port, host, () => {
  console.log(`[contact-api] http://${host}:${port}  (POST /api/contact, GET /health)`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`[contact-api] Port ${port} ist bereits belegt. Prozess beenden oder PORT=4001 setzen.`);
    process.exit(1);
  }
  throw err;
});
