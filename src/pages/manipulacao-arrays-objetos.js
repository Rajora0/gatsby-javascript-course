import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ManipulacaoArraysObjetos = () => (
  <Layout>
    <h1>Manipulação de Arrays e Objetos em JavaScript</h1>
    <p>Explore como manipular arrays e objetos em JavaScript, incluindo métodos de array e operações em objetos.</p>

    {/* Adicione o conteúdo específico sobre Manipulação de Arrays e Objetos aqui */}

    <ul>
      <li><Link to="/SintaxeBasicaJS">Sintaxe Básica do JavaScript</Link></li>
      <li><Link to="/FuncoesJS">Funções em JavaScript</Link></li>
      {/* Adicione mais links para outras seções, se necessário */}
    </ul>

    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
)

export const Head = () => <Seo title="Manipulação de Arrays e Objetos em JavaScript" />

export default ManipulacaoArraysObjetos
