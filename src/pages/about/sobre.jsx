import React from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./sobre.scss";

function Sobre() {
  return (
    <>
      <Navbar />

      <main className="sobre-container">
        <section className="sobre-header">
          <h2>Sobre a Feira de Profissões:</h2>
          <div className="sobre-info">
            <p><b>Data:</b> 20/05/2025 - 21/05/2025</p>
            <p><b>Horário:</b> 09h às 12h e 13h às 16h</p>
            <p><b>Endereço:</b> Instituto Nossa Senhora do Patrocínio</p>
          </div>
        </section>

        <section className="sobre-mapa">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        <section className="sobre-mapas">
          <h3>Mapas:</h3>
          <div className="mapas-lista">
            {[1, 2, 3].map((i) => (
              <div key={i} className="mapa-card">
                <img
                  src={`/images/mapa${i}.png`}
                  alt={`Mapa ${i}`}
                />
                <div className="legenda">
                  <p><b>Legenda:</b></p>
                  <ul>
                    <li>Pavilhão 1</li>
                    <li>Pavilhão 2</li>
                    <li>Banheiros</li>
                    <li>Alimentação</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
