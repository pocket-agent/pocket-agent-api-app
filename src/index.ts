import { Hono } from "hono";
import { logger } from "hono/logger";
import { authMiddleware, corsMiddleware, errorHandler } from "@/middleware";
import { authRouter } from "@/routes/auth";
import { chatRouter } from "@/routes/chat";
import { healthRouter } from "@/routes/health";
import { meRouter } from "@/routes/me";
import { statusRouter } from "@/routes/status";
import { settingsRouter } from "@/routes/settings";
import { Env, Variables } from "@/types";

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.use("*", logger());
app.use("*", corsMiddleware);
app.use("*", errorHandler);

app.route("/health", healthRouter);
app.route("/status", statusRouter);

const secured = new Hono<{ Bindings: Env; Variables: Variables }>();
secured.use("*", authMiddleware);
secured.route("/auth", authRouter);
secured.route("/me", meRouter);
secured.route("/chat", chatRouter);
secured.route("/settings", settingsRouter);
app.route("/", secured);

app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: {
        message: "Not Found",
        code: "NOT_FOUND",
      },
    },
    { status: 404 }
  );
});

export default app;
