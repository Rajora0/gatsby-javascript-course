import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../pages/contact.css';

const ContactSection = () => (
  <Layout>
    <Seo title="Contato" />
    <h1>Entre em contato comigo</h1>
    <p>Envie suas perguntas ou comentários. Eu ficaria feliz em ouvir de você!</p>
    
    {/* Formulário de Contato */}
    <form
      action="https://formspree.io/f/xleyqnyw"
      method="POST"
    >
      <label>
        Nome:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Mensagem:
        
        <div className="textarea-container">
          <textarea className="textarea-container" name="message" required />
        </div>
      </label>
      <br />
      <div className="label-container">
        <button type="submit">Submit</button>
      </div>
    </form>

    <Link to="/">Voltar para a página inicial</Link>
  </Layout>
)

export default ContactSection
