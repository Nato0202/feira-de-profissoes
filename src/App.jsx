import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx"

export default function App() {

  return (
        <Link to="/sobre" className="brand">
          <img src="/logo.png" alt="Logo" />
        </Link>
  );
}

