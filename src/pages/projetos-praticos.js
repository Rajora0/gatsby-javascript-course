import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjetosPraticos = () => (
    <Layout>
      <h1>Projetos Práticos em JavaScript</h1>
      <p>Coloque em prática seus conhecimentos em JavaScript desenvolvendo projetos reais e desafiadores.</p>
  
      {/* Adicione o conteúdo específico sobre Projetos Práticos aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Projetos Práticos em JavaScript" />
  
  export default ProjetosPraticos
  