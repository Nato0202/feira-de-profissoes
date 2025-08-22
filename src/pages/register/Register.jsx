import React from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./Register.scss";

function Register() {
  return (
    <>
      <Navbar />

      <main className="register-container">
        <h2>Inscrição</h2>
        <form className="register-form">
          <input type="text" placeholder="Nome" required />
          <select>
            <option>Escolaridade</option>
            <option>Ensino Fundamental</option>
            <option>Ensino Médio</option>
            <option>Ensino Superior</option>
          </select>
          <select>
            <option>Interesse em algum curso</option>
            <option>Informática</option>
            <option>Administração</option>
          </select>
          <input type="text" placeholder="Previsão de chegada à feira" />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Como ficou sabendo da feira?" />
          <input type="tel" placeholder="Telefone" />
          <select>
            <option>Já foi aluno do Frei?</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
          <input type="text" placeholder="CPF" required />
          <Button text="Inscrever-se" type="submit" />
        </form>
      </main>

      <Footer />
    </>
)};

export default Register;
