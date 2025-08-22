import React from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./Login.scss";


function Login (){
  return (
    <>
      <Navbar />

      <main className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button text="Entrar" type="submit" />
        </form>
      </main>

      <Footer />
    </>
)};


export default Login;