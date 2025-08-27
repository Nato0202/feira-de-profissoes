import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./history.scss";

  function History () {
  return (
  <>
    <Navbar />
      <main className="historia-container">
        <section className="historia-header">
          <h2>História do Instituto:</h2>
            <div className="historia-card">
              <div className="historia-card-img">
                <img id="historiaimg" src="../../../public/images/ISNSF.png" alt="Instituto" />
              </div>
              <div className="historia-card-txt">
                <p>
                  A Ação Social teve seu início em 1970, com a vinda de um frade
                  <br/>Franciscano, oriundo da Itália, chamado de Frate 
                  <br/>Severino, conhecido carinhosamente no Brasil como Frei 
                  <br/>Xavier. Sua primeira obra foi construir uma igreja e integrar a 
                  <br/>comunidade em torno dos princípios da fé Católica. Com esse
                  <br/>convívio, começaram a brotar ideias, na direção de uma Ação
                  <br/>Social Nossa Senhora de Fátima, com o grande objetivo de
                  <br/>ajudar os jovens mais carentes na região. A Ação Social,
                  <br/>divide-se em vários grupos de atividades, todas no sentido de
                  <br/>assistir a comunidade, tendo como pilastra o Ser Humano
                  <br/>desde a infância, seguindo com a juventude, na preparação do
                  <br/>Caminho para Maioridade (Cidadania).
                </p>
              </div>
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
)};

   export default History;