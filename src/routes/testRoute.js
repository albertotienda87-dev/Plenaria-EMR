import express from "express";
import db from "../../firebase.js"; // go up twice: routes → src → root

const router = express.Router();

router.get("/test-firestore", async (req, res) => {
  try {
    const docRef = db.collection("tests").doc("ping");
    await docRef.set({ time: new Date().toISOString() });

    const snapshot = await docRef.get();
    res.json({ id: snapshot.id, ...snapshot.data() });
  } catch (err) {
    console.error("Firestore error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
