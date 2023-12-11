import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FerramentasAmbientesDesenvolvimento = () => (
    <Layout>
      <h1>Ferramentas e Ambientes de Desenvolvimento em JavaScript</h1>
      <p>Explore as ferramentas e configurações essenciais para o desenvolvimento JavaScript eficiente.</p>
  
      {/* Adicione o conteúdo específico sobre Ferramentas e Ambientes de Desenvolvimento aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Ferramentas e Ambientes de Desenvolvimento em JavaScript" />
  
  export default FerramentasAmbientesDesenvolvimento
  