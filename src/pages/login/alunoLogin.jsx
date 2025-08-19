import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import "./Login.scss";

const AlunoLogin = () => {
  return (
    <>
      <Navbar />

      <main className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button text="Entrar" type="submit" />
        </form>
      </main>

      <Footer />
    </>
  );
};

export default AlunoLogin;
