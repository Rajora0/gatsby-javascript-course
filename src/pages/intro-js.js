import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IntroJS= () => (
  <Layout>
    <h1>Introdução ao JavaScript: Uma Jornada pelo Mundo da Programação Web</h1>
    <p>Bem-vindo à seção de introdução ao JavaScript! Se você está começando sua jornada no desenvolvimento web ou deseja aprimorar suas habilidades, você está no lugar certo. Neste artigo, exploraremos os fundamentos do JavaScript, a linguagem de programação essencial para criar experiências interativas na web.</p>

    <img
      src="https://codecrush.com.br/static/images/articles/banner-7-sites-js.png?w=1200&q=75"
      alt="JavaScript Logo"
      style={{ width: "100%", height: "auto" }}
    />

    <h2>O que é JavaScript?</h2>
    <p>O JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela é amplamente utilizada no desenvolvimento web para tornar as páginas mais dinâmicas e interativas. Desde a manipulação do DOM até a comunicação com servidores, o JavaScript desempenha um papel crucial no ecossistema da web.</p>

    <h2>Por que JavaScript?</h2>
    <p>JavaScript é uma escolha popular entre os desenvolvedores web por várias razões. Ela permite a criação de interfaces de usuário dinâmicas, responde a eventos do usuário e facilita a construção de aplicativos eficientes e responsivos.</p>

    <h2>Principais Conceitos Iniciais</h2>
    <p>Vamos começar explorando alguns conceitos básicos do JavaScript:</p>
    <ul>
      <li><strong>Variáveis, Tipos de Dados e Operadores:</strong> Entenda como declarar variáveis, os diferentes tipos de dados e como usar operadores.</li>
      <li><strong>Estruturas de Controle de Fluxo:</strong> Explore estruturas condicionais como 'if' e 'else', e laços de repetição como 'for' e 'while'.</li>
      <li><strong>Funções:</strong> Aprenda a declarar funções, passar parâmetros e retornar valores.</li>
    </ul>

    <h2>Utilizando JavaScript em Projetos Reais</h2>
    <p>Para demonstrar como aplicar os conceitos aprendidos, assista ao vídeo tutorial abaixo, onde mostramos como utilizar JavaScript em um projeto real:</p>

    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe 
        src="https://www.youtube.com/embed/pWseQJRL_2k" // Substitua este link pelo link de incorporação do seu vídeo
        title="Tutorial JavaScript"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>Este tutorial prático irá guiá-lo através da criação de uma aplicação simples usando JavaScript, destacando os conceitos discutidos anteriormente.</p>

    <p>Para uma introdução mais detalhada, você pode conferir a documentação oficial do JavaScript <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer">aqui</a>.</p>

    <ul>
        <li> <p><Link to="/intro-node-js">Explore o Node.js</Link></p></li>
        <li> <Link to="/emulador-javascript">Experimente Emuladores Online</Link></li>
        <li> <Link to="/calculadora">Calculadora</Link></li>
    </ul>

    <p><Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link></p>

  </Layout>
)

export const Head = () => <Seo title="Introdução ao JavaScript" />

export default IntroJS
