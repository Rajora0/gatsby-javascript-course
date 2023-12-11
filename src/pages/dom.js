import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DOM = () => (
    <Layout>
      <h1>Manipulação do DOM com JavaScript</h1>
      <p>Aprenda a manipular o Document Object Model (DOM) usando JavaScript para interagir dinamicamente com páginas web.</p>
  
      {/* Adicione o conteúdo específico sobre Manipulação do DOM aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Manipulação do DOM com JavaScript" />
  
  export default DOM
  