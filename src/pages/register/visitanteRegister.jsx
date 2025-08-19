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
        <div className='pai'>
            <div className='titulo'>
                <h1>Inscrição</h1>
            </div>
            <div className='formulario'>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    {/* Escolaridade */}
                    <label htmlFor="escolaridade">Escolaridade:</label>
                    <select id="escolaridade" name="escolaridade" required>
                      <option value="">Selecione...</option>
                      <option value="fundamental">Ensino Fundamental</option>
                      <option value="medio">Ensino Médio</option>
                      <option value="superior">Ensino Superior</option>
                    </select>

                    {/* Interesse em algum curso */}
                    <label htmlFor="curso">Interesse em algum curso:</label>
                    <select id="curso" name="curso">
                      <option value="">Selecione...</option>
                      <option value="informatica">Informática</option>
                      <option value="administracao">Administração</option>
                      <option value="ingles">Inglês</option>
                    </select>

                    {/* Previsão de chegada */}
                    <label htmlFor="chegada">Previsão de chegada à feira:</label>
                    <input type="text" id="chegada" name="chegada" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    {/* Como ficou sabendo */}
                    <label htmlFor="origem">Como ficou sabendo da feira:</label>
                    <select id="origem" name="origem">
                      <option value="">Selecione...</option>
                      <option value="amigos">Amigos</option>
                      <option value="redes">Redes sociais</option>
                      <option value="escola">Escola</option>
                    </select>

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />

                    {/* Já foi aluno */}
                    <label htmlFor="exAluno">Já foi aluno do Frei:</label>
                    <select id="exAluno" name="exAluno">
                      <option value="">Selecione...</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>

                    {/* CPF */}
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" />

                    <button type="submit">Registrar</button>
                </form>
            </div>
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
