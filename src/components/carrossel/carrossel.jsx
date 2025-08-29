import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CursosCarousel() {
  return (
    <section className="cursos container my-5">
      <h2 className="titulo mb-4">Cursos:</h2>

      <div id="carouselCursos" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores (bolinhas) */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCursos"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCursos"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCursos"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/imagens/curso1.jpg" className="d-block w-100" alt="Curso 1" />
          </div>
          <div className="carousel-item">
            <img src="/imagens/curso2.jpg" className="d-block w-100" alt="Curso 2" />
          </div>
          <div className="carousel-item">
            <img src="/imagens/curso3.jpg" className="d-block w-100" alt="Curso 3" />
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCursos"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCursos"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}
