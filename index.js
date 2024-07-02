import express from "express";
import dotenv from "dotenv";
import conectardb from "./config/db.js";

const app = express();

dotenv.config();
conectardb();

console.log()

app.use("/", (req, res) => {
  res.send("Hola Mundo");
});





const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
});
