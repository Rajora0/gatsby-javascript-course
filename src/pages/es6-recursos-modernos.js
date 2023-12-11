import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ES6RecursosModernos = () => (
    <Layout>
      <h1>Recursos Modernos do ES6 em JavaScript</h1>
      <p>Descubra as novas funcionalidades e melhorias introduzidas no ECMAScript 6 (ES6) em JavaScript.</p>
  
      {/* Adicione o conteúdo específico sobre ES6 e Recursos Modernos aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Recursos Modernos do ES6 em JavaScript" />
  
  export default ES6RecursosModernos
  