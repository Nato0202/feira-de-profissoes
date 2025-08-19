import { connection } from "../config/db.js";

// Criar visitante
export async function createVisitante(data, qrCode) {
  const [result] = await connection.execute(
    `INSERT INTO visitantes 
    (nome, escolaridade, interesses, previsao_chegada, email, como_soube, telefone, ja_foi_aluno, cpf, qr_code)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.nome,
      data.escolaridade,
      data.interesses,
      data.previsao_chegada,
      data.email,
      data.como_soube,
      data.telefone,
      data.ja_foi_aluno || 0,
      data.cpf,
      qrCode,
    ]
  );
  return result;
}

// Buscar visitante por nome + QR Code
export async function findVisitanteByNomeAndQrCode(nome, qrCode) {
  const [rows] = await connection.execute(
    "SELECT * FROM visitantes WHERE nome = ? AND qr_code = ?",
    [nome, qrCode]
  );
  return rows[0];
}
