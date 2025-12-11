import express from "express";
import userRoutes from "./routes/userRoutes.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./database/db.js";
const app = express();
app.use(express.json());

// Usando as rotas
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Vibe Seven API rodando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
