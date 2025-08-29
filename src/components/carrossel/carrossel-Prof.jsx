import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carrossel-Prof.scss";

export default function ProfessoresCarousel() {
  const Professores = [
    {
      titulo: "Bruno Oliveira",
      icone: "👨‍💼",
      lista: ["Finanças", "Marketing", "Recursos humanos", "Empreendedorismo", "Estratégia", "Comportamento organizacional"],
    },
    {
      titulo: "Pedro Moreira",
      icone: "💻",
      lista: ["Fundamentos da computação", "Pacote Office", "Programação", "Internet e redes", "Design gráfico", "Banco de dados"],
    },
    {
      titulo: "Natan",
      icone: "🎨",
      lista: ["Design Gráfico", "Tipografia", "Identidade Visual", "Ilustração", "Fotografia", "Multimídia"],
    },
    // ... resto igual
  ];

  return (
    <section className="professores">
      <h2 className="titulo">Professores:</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="meu-swiper"
      >
        {Professores.map((professor, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="icone">{professor.icone}</div>
              <h3>{professor.titulo}</h3>
              <ul>
                {professor.lista.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}