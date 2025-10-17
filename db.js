import mongoose from "mongoose";


export  default async function connectDB() {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ Connexion à MongoDB réussie !");
    return db;
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error.message);
  }
}
