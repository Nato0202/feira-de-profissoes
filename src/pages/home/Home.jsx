import { useState } from 'react'
import './Home.scss'
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Menu from "../../components/menu/menu.jsx";
import CursosCarousel from '../../components/carrossel/carrossel.jsx';


function Home() {

  return (
    <>
    <Navbar />
      <main>
        <section>
          <div className="apresentacao">
            <img src="" alt="apresentacao" />
          </div>
            <div className="parceiros">
              <h1>Parceiros<span>:</span></h1>
              <div className="carrosel-parceiros"></div>
            </div>
            <div className="video-fundo">
              <video autoPlay loop muted>
                <source src="/src/assets/videos/video.mp4" type="video/mp4" />
              </video>
            </div>
          <CursosCarousel />
        </section>
      </main>
      <Footer />
      </>
)
}

export default Home;
