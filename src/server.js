import express from "express";
import cors from "cors";
import patientsRouter from "./routes/patients.routes.js";

const app = express();

// 1) Middlewares globales (se aplican a TODAS las rutas)
app.use(cors());          // Permite que el frontend (otro origen/puerto) haga requests
app.use(express.json());  // Parsea JSON automáticamente en req.body

// 2) Healthcheck de vida
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

// 3) Montas las rutas de pacientes bajo el prefijo /api
//    Significa que las rutas del router se vuelven: /api/patients, /api/patients/:id, etc.
app.use("/api", patientsRouter);

// 4) 404 para cualquier ruta no encontrada
app.use((req, res) => {
  return res.status(404).json({ error: "Not found" });
});

// 5) Manejador de errores (si algún controller lanza un error)
//    Tener este bloque al final es una buena práctica.
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  return res.status(500).json({ error: "Internal Server Error" });
});

// 6) Arranque del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
