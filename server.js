const express = require("express");
const todoRoutes = require("./src/routes/TodoRoutes.js");
const dotenv = require("dotenv");
const {connectDB }= require("./db.js");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/todos", todoRoutes);
app.set("view engine", "pug");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});