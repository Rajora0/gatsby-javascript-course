import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BoasPraticasCodigo = () => (
    <Layout>
      <h1>Boas Práticas de Código em JavaScript</h1>
      <p>Explore as boas práticas de codificação em JavaScript para escrever código legível, eficiente e sustentável.</p>
  
      {/* Adicione o conteúdo específico sobre Boas Práticas de Código aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Boas Práticas de Código em JavaScript" />
  
  export default BoasPraticasCodigo
  