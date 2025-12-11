// Modelo simples de usuário (por enquanto sem banco real)

export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
