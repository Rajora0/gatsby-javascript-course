import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EmuladorJavaScript = () => (
  <Layout>
    <h1>Usando JavaScript em Emuladores Online</h1>
    <p>Às vezes, você pode querer testar ou compartilhar trechos de código JavaScript sem a necessidade de configurar um ambiente de desenvolvimento local. Emuladores online, como o JSFiddle, oferecem uma solução conveniente. Vamos explorar como usar JavaScript em um emulador online.</p>

    <h2>Passo 1: Acesso ao Emulador Online (JSFiddle)</h2>
    <p>Abra seu navegador e acesse o site do <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">JSFiddle</a>. Este é um emulador online que suporta HTML, CSS e JavaScript.</p>

    <h2>Passo 2: Adicionando JavaScript</h2>
    <p>No JSFiddle, você verá três seções separadas para HTML, CSS e JavaScript. Foque na seção de JavaScript. Aqui estão algumas coisas que você pode fazer:</p>

    <ul>
      <li>
        <strong>Escrever Código:</strong> Digite seu código JavaScript diretamente na área designada.
      </li>
      <li>
        <strong>Incluir Bibliotecas Externas:</strong> Se necessário, você pode incluir bibliotecas externas clicando na guia "JavaScript" e selecionando uma biblioteca a partir daí.
      </li>
    </ul>

    <h2>Passo 3: Executando o Código</h2>
    <p>Após escrever seu código, clique no botão "Run" para executar o código. A saída será exibida na área de resultados.</p>

    <h2>Passo 4: Compartilhando o Resultado</h2>
    <p>Uma das características úteis do JSFiddle é a capacidade de compartilhar facilmente seu código. Clique no botão "Share" para obter um link compartilhável que direciona outros para o seu emulador online com o código já inserido.</p>

    <h2>Exemplo de Código "Hello, World!"</h2>
    <p>Para ilustrar, aqui está um exemplo simples de código "Hello, World!" em JavaScript que você pode experimentar no JSFiddle:</p>

    <pre>
      <code>
        {`// JSFiddle: https://jsfiddle.net/
        
// HTML
<div id="output"></div>

// JavaScript
const message = "Hello, World!";
document.getElementById("output").innerHTML = message;
`}
      </code>
    </pre>

    <p>Este exemplo exibe a mensagem "Hello, World!" em uma div com o ID "output". Copie e cole no JSFiddle para ver o código em ação.</p>
    <ul>
        <li> <p><Link to="/intro-js">Introdução ao JavaScript</Link></p></li>
        <li> <p><Link to="/intro-node-js">Explore o Node.js</Link></p></li>
        <li> <Link to="/calculadora">Calculadora</Link></li>
    </ul>
    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
)

export const Head = () => <Seo title="Usando JavaScript em Emuladores Online" />

export default EmuladorJavaScript
