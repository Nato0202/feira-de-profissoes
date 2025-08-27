import React from "react";
import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="exhibitors">
        <h3>Expositores:</h3>
        <div className="logos">
          <img id="santanderimg" src="../../../public/images/Santander.png" alt="Santander" />
          <img id="pwiimg" src="/images/Pwi.jpg" alt="PWI Sistemas" />
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
          <img id="fairSantander" src="../../../public/images/Santander.png" alt="Santander" />
          <img id="fairPWI" src="../../../public/images/PWI.jpg" alt="PWI" />
          <img id="fairFeira" src="../../../public/images/image.png" alt="Feira de Profissões" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </footer>
  );
}
