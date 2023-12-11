import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FuncoesJS = () => (
  <Layout>
    <h1>Funções em JavaScript</h1>
    <p>Aprenda sobre como declarar, chamar e trabalhar com funções em JavaScript.</p>

    {/* Adicione o conteúdo específico sobre Funções aqui */}

    <ul>
      <li><Link to="/IntroJS">Introdução ao JavaScript</Link></li>
      <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
      {/* Adicione mais links para outras seções, se necessário */}
    </ul>

    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
)

export const Head = () => <Seo title="Funções em JavaScript" />

export default FuncoesJS
