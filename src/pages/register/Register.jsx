import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./Register.scss";

function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    escolaridade: "",
    interesses: "",
    previsao_chegada: "",
    email: "",
    como_soube: "",
    telefone: "",
    ja_foi_aluno: "0",
    cpf: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/register/visitante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Visitante registrado com sucesso! QR Code: ${data.qrCode}`);
      } else {
        alert("Erro ao registrar visitante");
      }
    } catch (error) {
      alert("Erro de conexão: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />

      <main className="register-container">
        <h2>Inscrição</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nome"
            placeholder="Nome" 
            value={formData.nome}
            onChange={handleChange}
            required 
          />
          <select name="escolaridade" value={formData.escolaridade} onChange={handleChange}>
            <option value="">Escolaridade</option>
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Ensino Superior">Ensino Superior</option>
          </select>
          <select name="interesses" value={formData.interesses} onChange={handleChange}>
            <option value="">Interesse em algum curso</option>
            <option value="Informática">Informática</option>
            <option value="Administração">Administração</option>
          </select>
          <input 
            type="text" 
            name="previsao_chegada"
            placeholder="Previsão de chegada à feira" 
            value={formData.previsao_chegada}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="E-mail" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="como_soube"
            placeholder="Como ficou sabendo da feira?" 
            value={formData.como_soube}
            onChange={handleChange}
          />
          <input 
            type="tel" 
            name="telefone"
            placeholder="Telefone" 
            value={formData.telefone}
            onChange={handleChange}
          />
          <select name="ja_foi_aluno" value={formData.ja_foi_aluno} onChange={handleChange}>
            <option value="0">Já foi aluno do Frei?</option>
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
          <input 
            type="text" 
            name="cpf"
            placeholder="CPF" 
            value={formData.cpf}
            onChange={handleChange}
            required 
          />
          <button type="submit">Inscrever-se</button>
        </form>
      </main>

      <Footer />
    </>
)};

export default Register;
