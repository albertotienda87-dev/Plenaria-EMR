import { Router } from "express";
import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patients.controller.js";

const router = Router();

// Aquí defines las URLs y “a qué controller” mandarlas:
router.get("/patients", getPatients);
router.post("/patients", createPatient);
router.put("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

// Exportas el router para montarlo en server.js
export default router;
