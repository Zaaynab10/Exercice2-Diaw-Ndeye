import dotenv from "dotenv";  
dotenv.config();              
import './db.js'

import express from "express";
import todoRoutes from "./src/routes/TodoRoutes.js";

const app = express();
app.use(express.json());
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
