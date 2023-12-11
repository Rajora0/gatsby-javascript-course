import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestesJavaScript = () => (
    <Layout>
      <h1>Testes em JavaScript</h1>
      <p>Descubra a importância dos testes em JavaScript e explore frameworks populares para testes unitários.</p>
  
      {/* Adicione o conteúdo específico sobre Testes em JavaScript aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Testes em JavaScript" />
  
  export default TestesJavaScript
  