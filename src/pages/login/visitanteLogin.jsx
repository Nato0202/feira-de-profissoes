import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import "./Login.scss";

const VisitanteLogin = () => {
  return (
    <>
      <Navbar />

      <main className="login-container">
        <h2>Vincular QR</h2>
        <form className="login-form">
          <Input placeholder="Nome" type="text" />
          <Input placeholder="Nº QR Code" type="text" />
          <Button text="Entrar" type="submit" />
        </form>
      </main>

      <Footer />
    </>
  );
};

export default VisitanteLogin;
