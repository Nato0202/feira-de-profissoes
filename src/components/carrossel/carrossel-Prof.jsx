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
      lista: [
        "Finanças",
        "Marketing",
        "Recursos humanos",
        "Empreendedorismo",
        "Estratégia",
        "Comportamento organizacional",
      ],
    },
    {
      titulo: "Pedro Moreira",
      icone: "💻",
      lista: [
        "Fundamentos da computação",
        "Pacote Office",
        "Programação",
        "Internet e redes",
        "Design gráfico",
        "Banco de dados",
      ],
    },
    {
      titulo: "Natan",
      icone: "🎨",
      lista: [
        "Design Gráfico",
        "Tipografia",
        "Identidade Visual",
        "Ilustração",
        "Fotografia",
        "Multimídia",
      ],
    },
    {
      titulo: "Robson",
      icone: "🚗",
      lista: [
        "Fundamentos de Mecânica",
        "Circuitos Elétricos",
        "Sistemas Eletrônicos",
        "Motores Elétricos",
        "Sistemas de Transmissão",
        "Diagnóstico e Manutenção",
      ],
    },
    {
      titulo: "Eduardo",
      icone: "📝",
      lista: [
        "Gestão de Agenda",
        "Atendimento ao Público",
        "Organização de Documentos",
        "Apoio Administrativo",
        "Comunicação Eficiente",
        "Uso de Ferramentas",
      ],
    },
    {
      titulo: "ELETROTÉCNICA",
      icone: "🔌",
      lista: [
        "Circuitos Elétricos",
        "Teoria dos Sistemas Elétricos",
        "Máquinas Elétricas",
        "Eletrônica",
        "Automação",
        "Segurança Elétrica",
      ],
    },
    {
      titulo: "ELETRICISTA INSTALADOR",
      icone: "⚡",
      lista: [
        "Instalação de Sistemas Elétricos",
        "Manutenção e Reparo",
        "Leitura de Projetos",
        "Segurança",
        "Atendimento ao Cliente",
      ],
    },
    {
      titulo: "INFORMÁTICA (BÁSICA)",
      icone: "🖥️",
      lista: [
        "Hardware e Software",
        "Sistemas Operacionais",
        "Pacotes de Escritório",
        "Navegação na Internet",
        "Armazenamento de Dados",
        "Multimídia",
      ],
    },
    {
      titulo: "ASSISTENTE ADMINISTRATIVO",
      icone: "📑",
      lista: [
        "Gerenciamento de Documentos",
        "Atendimento ao Cliente",
        "Agendamento e Coordenação",
        "Suporte Financeiro",
        "Uso de Ferramentas Tecnológicas",
        "Comunicação",
      ],
    },
    {
      titulo: "ASSISTENTE DE MÍDIAS SOCIAIS",
      icone: "📱",
      lista: [
        "Criação de Conteúdo",
        "Gerenciamento de Perfis",
        "Interação com o Público",
        "Planejamento Estratégico",
        "Tendências e Inovação",
      ],
    },
    {
      titulo: "INGLÊS",
      icone: "📘",
      lista: [
        "Inglês básico - intermediário (Diurno)",
        "Inglês básico - (Noturno)",
        "Inglês básico - Semipresencial (Noturno)",
        "Inglês Intermediário (Noturno)",
        "Inglês Pré-Avançado (Sábados)",
        "Inglês Avançado (Sábados)",
        "Inglês Melhor idade (Diurno)",
      ],
    },
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
        grabCursor={true}
        touchRatio={1.5}
        touchAngle={45}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        centeredSlides={false}
        centeredSlidesBounds={false}
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
