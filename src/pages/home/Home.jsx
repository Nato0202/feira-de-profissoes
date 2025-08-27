import React from "react";
import './Home.scss'
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import CursosCarousel from '../../components/carrossel/carrossel.jsx';
import ProfessoresCarousel from "../../components/carrossel/carrossel-Prof.jsx";


function Home() {

  return (
    <>
    <Navbar />
      <main>
        <section>
          <div className="apresentacao">
            <img id="apresentacao" src="../../../public/images/apresentacao.png" alt="apresentacao" />
          </div>
            <div className="carrosel-cursos"><CursosCarousel/></div>
            <div className="video-fundo">
              <video autoPlay loop muted>
                <source src="/src/assets/videos/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="carrosel-professores"><ProfessoresCarousel/></div>
        </section>
      </main>
      <Footer />
      </>
)};

export default Home;
