import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PromisesAssincrono = () => (
    <Layout>
      <h1>Promises e Programação Assíncrona em JavaScript</h1>
      <p>Compreenda os conceitos assíncronos em JavaScript, aprenda a utilizar Promises e explore o uso de async/await.</p>
  
      {/* Adicione o conteúdo específico sobre Promises e Assíncrono aqui */}
  
      <ul>
        <li><Link to="/ManipulacaoArraysObjetosJS">Manipulação de Arrays e Objetos em JavaScript</Link></li>
        <li><Link to="/DOMManipulacaoJS">Manipulação do DOM em JavaScript</Link></li>
        {/* Adicione mais links para outras seções, se necessário */}
      </ul>
  
      <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Promises e Programação Assíncrona em JavaScript" />
  
  export default PromisesAssincrono
  