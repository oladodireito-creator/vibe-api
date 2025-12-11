import { Router } from "express";

const router = Router();

// Rota de teste da Vibe Seven
router.get("/users", (req, res) => {
  res.json({
    message: "Rota de usuários funcionando!"
  });
});

export default router;
