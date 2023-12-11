import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IntroNodeJS = () => (
  <Layout>
    <h1>Introdução ao Node.js: Instalação e Hello, World!</h1>
    <p>O Node.js é um ambiente de execução JavaScript que permite que você execute código JavaScript no lado do servidor. Vamos começar instalando o Node.js e criando nosso primeiro programa "Hello, World!".</p>

    <h2>Passo 1: Instalação do Node.js</h2>
    <p>Para instalar o Node.js, siga estas instruções:</p>
    
    <h3>No Linux/macOS:</h3>
    <pre>
      <code>
        $ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        $ sudo apt-get install -y nodejs
      </code>
    </pre>

    <h3>No Windows:</h3>
    <p>Visite o site oficial do <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> e baixe o instalador para Windows. Execute o instalador e siga as instruções.</p>

    <h2>Passo 2: Verificar a Instalação</h2>
    <p>Abra um terminal ou prompt de comando e execute os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:</p>
    <pre>
      <code>
        $ node -v
        $ npm -v
      </code>
    </pre>

    <h2>Passo 3: Criar um Hello, World!</h2>
    <p>Crie um arquivo chamado <code>hello.js</code> com o seguinte conteúdo:</p>
    <pre>
      <code>
        const message = "Hello, World!";
        console.log(message);
      </code>
    </pre>

    <p>Salve o arquivo e, no terminal ou prompt de comando, navegue até o diretório onde o arquivo está localizado e execute:</p>
    <pre>
      <code>
        $ node hello.js
      </code>
    </pre>

    <p>Se tudo estiver configurado corretamente, você verá a saída "Hello, World!" no console.</p>

    <p>Parabéns! Você acabou de criar e executar seu primeiro programa usando o Node.js.</p>

    <ul>
        <li> <p><Link to="/intro-js">Introdução ao JavaScript</Link></p></li>
        <li> <Link to="/emulador-javascript">Experimente Emuladores Online</Link></li>
        <li> <Link to="/calculadora">Calculadora</Link></li>
    </ul>

    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
)

export const Head = () => <Seo title="Introdução ao Node.js" />

export default IntroNodeJS
