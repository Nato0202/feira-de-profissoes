import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './historia.scss'

function history() {

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
        <h1>História do Instituto<span>:</span></h1>
        <div>
          <div>
            <p>

            </p>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
        </div>
        <h1>Objetivo dos cursos<span>:</span></h1>
          <div>
            <p>

            </p>
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </div>
        <h1>Fotos dos alunos<span>:</span></h1>
          <div>
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </div>
      </main>
      <footer>
        <h1>expositores:</h1>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={viteLogo} className="logo vite" alt="Vite logo" />

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

export default history;
