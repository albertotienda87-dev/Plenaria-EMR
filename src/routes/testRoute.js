import { Router } from "express";
import admin from "../firebase.js";

const router = Router();

// Test Firebase connection
router.get("/firebase-test", async (req, res) => {
  try {
    const db = admin.firestore();
    const docRef = db.collection("test").doc("hello");
    await docRef.set({ message: "Firebase is connected 🎉", time: new Date() });

    const doc = await docRef.get();
    return res.json({ success: true, data: doc.data() });
  } catch (err) {
    console.error("Firebase test error:", err);
    return res.status(500).json({ error: "Firebase connection failed" });
  }
});

export default router;
