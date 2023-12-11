import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FAQForum = () => (
    <Layout>
      <h1>FAQ e Fórum de JavaScript</h1>
      <p>Encontre respostas para perguntas frequentes e participe de discussões no nosso fórum dedicado ao JavaScript.</p>
  
      {/* Adicione o conteúdo específico sobre FAQ e Fórum aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="FAQ e Fórum de JavaScript" />
  
  export default FAQForum
  