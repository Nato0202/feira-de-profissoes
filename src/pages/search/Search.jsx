import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";

function Search() {
  const [nome, setNome] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:5001/api/auth/visitantes/search?nome=${encodeURIComponent(
          nome
        )}&qrCode=${encodeURIComponent(qrCode)}`
      );

      if (!res.ok) throw new Error("Erro na busca");

      const data = await res.json();
      setResults(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="QR Code"
        value={qrCode}
        onChange={(e) => setQrCode(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {results.map((v) => (
          <li key={v.id}>
            {v.nome} - {v.email} - {v.telefone}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Search;
