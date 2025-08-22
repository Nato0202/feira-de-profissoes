   import React from "react";
   import { Swiper, SwiperSlide } from "swiper/react";
   import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrossel.scss";

   export default function CursosCarousel() {
     const cursos = [
       {
         titulo: "ADMINISTRAÇÃO",
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
         titulo: "INFORMÁTICA",
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
         titulo: "COMUNICAÇÃO VISUAL",
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
     ];

     return (
       <section className="cursos">
         <h2 className="titulo">CURSOS:</h2>

         <Swiper
           modules={[Navigation, Pagination]}
           navigation
           pagination={{ clickable: true }}
           spaceBetween={30}
           slidesPerView={3}
           breakpoints={{
             0: { slidesPerView: 1 },
             768: { slidesPerView: 2 },
             1024: { slidesPerView: 3 },
           }}
         >
           {cursos.map((curso, index) => (
             <SwiperSlide key={index}>
               <div className="card">
                 <div className="icone">{curso.icone}</div>
                 <h3>{curso.titulo}</h3>
                 <ul>
                   {curso.lista.map((item, i) => (
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
   