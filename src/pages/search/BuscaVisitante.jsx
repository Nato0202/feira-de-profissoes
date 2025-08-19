import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Input from "../../components/input";
import "./BuscaVisitante.scss";

const BuscaVisitante = () => {
  return (
    <>
      <Navbar />

      <main className="busca-container">
        <h2>Busca do visitante:</h2>
        <form className="busca-form">
          <Input placeholder="Nome" type="text" />
          <button type="submit" className="btn-search">
            🔍
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default BuscaVisitante;
