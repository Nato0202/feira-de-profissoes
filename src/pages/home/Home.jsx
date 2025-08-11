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
