import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./historia.scss";

const Historia = () => {
  return (
    <>
      <Navbar />

      <main className="historia-container">
        <section className="historia-header">
          <h2>História do Instituto:</h2>
          <div className="historia-card">
            <img src="/src/assets/images/image.png" alt="Instituto" />
            <p>
              A feira nasceu em 2010 com o objetivo de aproximar estudantes do
              mercado de trabalho e orientar sobre carreiras...
            </p>
          </div>
        </section>

        <section className="historia-objetivo">
          <h3>Objetivo dos cursos:</h3>
          <p>
            Proporcionar aos alunos conhecimento técnico e prático para a
            inserção no mercado de trabalho...
          </p>
        </section>

        <section className="historia-fotos">
          <h3>Fotos dos alunos:</h3>
          <div className="fotos-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src="/src/assets/images/image.png"
                alt={`Foto ${i}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Historia;
