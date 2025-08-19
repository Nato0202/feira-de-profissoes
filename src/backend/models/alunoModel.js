import { connection } from "../config/db.js";

// Criar aluno
export async function createAluno(email, senhaCriptografada) {
  const [result] = await connection.execute(
    "INSERT INTO alunos (email, senha) VALUES (?, ?)",
    [email, senhaCriptografada]
  );
  return result;
}

// Buscar aluno por email
export async function findAlunoByEmail(email) {
  const [rows] = await connection.execute(
    "SELECT * FROM alunos WHERE email = ?",
    [email]
  );
  return rows[0];
}
