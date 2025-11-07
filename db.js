const mongoose = require("mongoose");
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

let pool; 

async function connectDB() {
  const type = process.env.DB_TYPE;

  try {
    if (type === "SQL") {
      console.log("Connexion à PostgreSQL...");
      pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
      await pool.connect();
      console.log("Connexion SQL réussie !");
      return pool;
    } else if (type === "NOSQL") {
      console.log("Connexion à MongoDB...");
      const db = await mongoose.connect(process.env.MONGO_URL);
      console.log("Connexion NoSQL réussie !");
      return db;
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    process.exit(1);
  }
}

module.exports = { connectDB, pool };