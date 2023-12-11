import * as React from "react"
import { Link } from "gatsby"
import "./header.css" // Certifique-se de ter um arquivo CSS para o estilo do header

const Header = ({ siteTitle }) => (
  <header className="animated-header">
    <div className="logo">
    </div>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contact-section">Contato</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header