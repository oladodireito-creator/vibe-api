import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = Router();

// Listar usuários
router.get("/users", getUsers);

// Criar um novo usuário
router.post("/users", createUser);

export default router;
