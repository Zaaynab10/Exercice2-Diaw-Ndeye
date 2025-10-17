import express from "express";
import todoRoutes from "./src/routes/TodoRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/todos", todoRoutes);
app.set('view engine', 'ejs');
app.use(express.static('view')); 

app.listen(port, () => {
  console.log(` Serveur démarré sur le port ${port}`);
});
