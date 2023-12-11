import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RecursosLinksUteis = () => (
    <Layout>
      <h1>Recursos e Links Úteis para Aprender JavaScript</h1>
      <p>Explore uma lista de recursos recomendados e links úteis para continuar sua jornada de aprendizado em JavaScript.</p>
  
      {/* Adicione o conteúdo específico sobre Recursos e Links Úteis aqui */}
  
      <ul>
        <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
        <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Recursos e Links Úteis para Aprender JavaScript" />
  
  export default RecursosLinksUteis
  