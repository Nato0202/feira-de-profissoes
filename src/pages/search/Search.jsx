import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./Search.scss";

  const Search = () => {
    return (
      <>
        <Navbar />

         <main className="busca-container">
           <h2>Busca do visitante:</h2>
           <form className="busca-form">
             <input placeholder="Nome" type="text" />
             <button type="submit" className="btn-search">
               🔍
             </button>
           </form>
         </main>

        <Footer />
      </>
)};

   export default Search; 