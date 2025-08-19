import bcrypt from "bcryptjs";
import aluno from "../models/alunoModel.js";
import visitante from "../models/visitanteModel.js";
import { generateToken } from "../middleware/generateToken.js";
import crypto from "crypto";

// ================= ALUNO =================
export async function registerAluno(req, res) {
  try {
    const { email, senha } = req.body;

    const hashedPassword = await bcrypt.hash(senha, 10);
    await aluno.createAluno(email, hashedPassword);

    res.status(201).json({ message: "Aluno registrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar aluno", details: err });
  }
}

export async function loginAluno(req, res) {
  try {
    const { email, senha } = req.body;

    const aluno = await aluno.findAlunoByEmail(email);
    if (!aluno) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    const isMatch = await bcrypt.compare(senha, aluno.senha);
    if (!isMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const token = generateToken(aluno.id);
    res.json({ message: "Login realizado com sucesso", token });
  } catch (err) {
    res.status(500).json({ error: "Erro no login", details: err });
  }
}

// ================= VISITANTE =================
export async function registerVisitante(req, res) {
  try {
    const data = req.body;
    const qrCode = crypto.randomBytes(4).toString("hex"); // Gera código único

    await visitante.createVisitante(data, qrCode);

    res
      .status(201)
      .json({ message: "Visitante registrado com sucesso!", qrCode });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar visitante", details: err });
  }
}

export async function loginVisitante(req, res) {
  try {
    const { nome, qr_code } = req.body;

    const visitante = await visitante.findVisitanteByNomeAndQrCode(nome, qr_code);
    if (!visitante) {
      return res.status(404).json({ error: "Visitante não encontrado" });
    }

    res.json({ message: "Login realizado com sucesso", visitante });
  } catch (err) {
    res.status(500).json({ error: "Erro no login visitante", details: err });
  }
}
