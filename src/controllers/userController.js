import { User } from "../models/User.js";

// Banco de dados temporário (por enquanto sem banco real)
let users = [
  new User(1, "Usuário Teste", "teste@vibeseven.com")
];

export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = new User(Date.now(), name, email);
  users.push(newUser);

  res.json({
    message: "Usuário criado com sucesso!",
    user: newUser
  });
};
