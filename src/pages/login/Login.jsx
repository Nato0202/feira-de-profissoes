import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/auth/login/aluno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!res.ok) throw new Error("Erro no login");

      const data = await res.json();
      localStorage.setItem("token", data.token); // guarda JWT
      alert("Login realizado com sucesso!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
    <Footer />
    </>
  );
}

export default Login;
