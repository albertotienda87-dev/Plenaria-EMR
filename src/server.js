import express from "express";
import cors from "cors";
import patientsRouter from "./routes/patients.routes.js";
import testRoute from "./routes/testRoute.js";  // 

const app = express();

// 1) Global Middlewares
app.use(cors());
app.use(express.json());

// 2) Healthcheck
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

// 3) Mount patients routes under /api
app.use("/api", patientsRouter);

// 4) Mount Firestore test route
app.use("/api", testRouter);

// 5) 404 handler
app.use((req, res) => {
  return res.status(404).json({ error: "Not found" });
});

// 6) Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  return res.status(500).json({ error: "Internal Server Error" });
});

// 7) Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
