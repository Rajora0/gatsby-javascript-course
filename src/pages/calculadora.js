import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EmuladorJavaScript = () => (
  <Layout>
    <h1>Usando JavaScript em Emuladores Online</h1>
    {/* Restante do conteúdo da seção... */}
    
    <h2>Exemplo de Código "Calculadora!"</h2>
    <p>Para ilustrar, aqui está um exemplo simples de código "Calculadora!" em JavaScript que você pode experimentar no JSFiddle:</p>

    {/* Seção para o emulador incorporado */}
    <div style={{ width: '100%', height: '500px' }}>
    <iframe width="100%" height="500" src="//jsfiddle.net/rajora0/wqbfhvo8/4/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
    </div>

    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
)

export const Head = () => <Seo title="Usando JavaScript em Emuladores Online" />

export default EmuladorJavaScript
