import express from "express";
import cors from "cors";

import patientsRouter from "./routes/patients.routes.js";
import testRouter from "./routes/testRoute.js";   

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

app.use("/api", patientsRouter);
app.use("/api", testRouter); 

app.use((req, res) => res.status(404).json({ error: "Not found" }));

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  return res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
