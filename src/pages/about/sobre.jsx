import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.scss'

function Home() {

  return (
    <>
      <nav>
        <img src="" alt="logo" />
        <div className="searchBar">
          <input type="Pesquisa"/>
        </div>
        <div className="menu">
          
        </div>
      </nav>
      <main>
        <div>
        <h1>Sobre a Feira de Profissões</h1>
        <a href="https://www.google.com.br/maps/place/Instituto+Social+Nossa+Senhora+de+Fátima/@-23.6803333,-46.7079309,17z/data=!3m1!4b1!4m9!1m2!10m1!1e1!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D">Instituto Social Nossa Senhora de Fátima</a>
        <h1>Mapa<span>:</span></h1>
        <img src="" alt="mapa" />
        </div>
      </main>
      <footer>
        <div className="start">
          <h1>Expositores<span>:</span></h1>
          <img src="" alt="santander" />
          <img src="" alt="PWI" />
        </div>
        <div className="end">
          <h1>Contato<span>:</span></h1>
          <div className="email">
            <img src="" alt="email" />
            <a href="" className='email'>
              <p>email: secretaria1@acaonsfatima.org.br</p>
            </a>
          </div>
          <div className="telefone">
            <img src="" alt="telefone" />
            <p>11 5687-8876</p>
          </div>
          <div className="SAC">
            <img src="" alt="SAC" />
            <a href="" className='SAC'>
              Fale Conosco
            </a>
          </div>
          <img src="" alt="logo2" />
        </div>
      </footer>
    </>
  )
}

export default Home;
