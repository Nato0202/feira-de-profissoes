import React from "react";

export default function LoginQr() {
  return (
    <div className="page page-light">
      <div className="card small">
        <h1 className="title">Vincular QR</h1>
        <form className="form">
          <input type="text" placeholder="Nome:" />
          <input type="text" placeholder="Nº QR Code" />
          <button type="button" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}
