import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; 

dotenv.config();

const app = express();

// Middleware CORS manual
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Responder imediatamente para requisições OPTIONS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

app.use(express.json());
app.use("/api/auth", authRoutes); // Rotas de autenticação

const PORT = 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
