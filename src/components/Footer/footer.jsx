import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="exhibitors">
        <h3>Expositores:</h3>
        <div className="logos">
          <img src="/logos/santander.png" alt="Santander" />
          <img src="/logos/pwi.png" alt="PWI Sistemas" />
        </div>
      </section>

      <section className="contact">
        <h3>Contato:</h3>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">✉️</div>
            <span>e-mail: secretaria@freianastacio.g12.br</span>
          </div>
          <div className="contact-item">
            <div className="icon">📞</div>
            <span>(11) 5067-8029</span>
          </div>
          <div className="contact-item">
            <div className="icon">💬</div>
            <span>Fale conosco</span>
          </div>
        </div>
      </section>

      <div className="fair-logo">
        <img src="/logo-feira.png" alt="Feira de Profissões" />
      </div>
    </footer>
  );
}
