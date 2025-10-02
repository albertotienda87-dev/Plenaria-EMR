// firebase.js
import admin from "firebase-admin";
import fs from "fs";

let credentials;

// If running in Railway, use env var
if (process.env.FIREBASE_CREDENTIALS) {
  credentials = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
  // If running locally, load the JSON file directly
  const serviceAccount = fs.readFileSync("./firebase db key/plenaria-erm-firebase-adminsdk-fbsvc-db5f035020.json", "utf8");
  credentials = JSON.parse(serviceAccount);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

const db = admin.firestore();
export default db;
