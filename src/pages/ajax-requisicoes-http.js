import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AjaxRequisicoesHTTP = () => (
    <Layout>
      <h1>AJAX e Requisições HTTP em JavaScript</h1>
      <p>Explore como realizar requisições assíncronas usando AJAX e a Fetch API em JavaScript.</p>
  
      {/* Adicione o conteúdo específico sobre AJAX e Requisições HTTP aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="AJAX e Requisições HTTP em JavaScript" />
  
  export default AjaxRequisicoesHTTP
  