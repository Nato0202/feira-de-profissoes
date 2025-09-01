 import React from "react";
import './Home.scss'
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import CursosCarousel from '../../components/carrossel/carrossel.jsx';



function Home() {

  return (
    <>
    <Navbar />
      <main>
        <section>
          <div className="apresentacao">
              <video className="video" autoPlay loop muted>
                <source src="/src/assets/videos/background_feira.mp4" type="video/mp4" />
              </video>
          </div>
            <div className="carrosel-cursos"><CursosCarousel/></div>
            <div className="video-fundo">
            </div>
        </section>
      </main>
      <Footer />
      </>
)};

export default Home;
