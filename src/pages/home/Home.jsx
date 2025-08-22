import { useState } from 'react'
import './Home.scss'
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Menu from "../../components/menu/menu.jsx";
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
            <div className="carrosel-parceiros">

            </div>
          </div>
          <div className="cursos">
            <h1>Cursos<span>:</span></h1>
          </div>
          <div className="carrosel-curso">

          </div>
        </section>
      </main>
      <Footer />
      </>
)
}

export default Home;
