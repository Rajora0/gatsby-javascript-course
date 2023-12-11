import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "1. Introdução ao JavaScript",
    url: "intro-js",
    description: "Explore o JavaScript como uma linguagem de programação de alto nível essencial para o desenvolvimento web. Descubra sua função crucial na criação de interatividade e dinamismo em páginas da web.",
  },
  {
    text: "2. Sintaxe Básica",
    url: "sintaxe-basica",
    description: "Desbrave os fundamentos do JavaScript, abordando variáveis para armazenar dados, tipos de dados (como números e strings) e operadores para manipular esses dados. Introduza estruturas de controle de fluxo para tomar decisões e repetições.",
  },
  {
    text: "3. Funções",
    url: "funcoes",
    description: "Compreenda o conceito de funções em JavaScript, desde a declaração até a chamada. Explore como usar parâmetros para tornar as funções mais flexíveis e o retorno de valores para obter resultados específicos.",
  },
  {
    text: "4. Manipulação de Arrays e Objetos",
    url: "manipulacao-arrays-objetos",
    description: "Aprofunde-se na manipulação de dados com arrays e objetos em JavaScript. Descubra os métodos poderosos disponíveis para trabalhar com arrays e como acessar e modificar dados em objetos.",
  },
  {
    text: "5. Promises e Assíncrono",
    url: "promises-assincrono",
    description: "Explore o mundo assíncrono do JavaScript, entendendo como as Promises podem lidar com operações assíncronas de maneira mais eficiente. Introduza o uso de async e await para simplificar a lógica assíncrona.",
  },
  {
    text: "6. DOM (Document Object Model)",
    url: "dom",
    description: "Mergulhe no DOM, a representação em árvore dos elementos HTML na página. Aprenda a selecionar elementos, manipular seu conteúdo e responder a eventos do usuário para criar experiências interativas.",
  },
  {
    text: "7. AJAX e Requisições HTTP",
    url: "ajax-requisicoes-http",
    description: "Descubra como o JavaScript pode fazer solicitações HTTP assíncronas para recuperar ou enviar dados para um servidor. Explore as diferentes abordagens, como XMLHttpRequest e a Fetch API.",
  },
  {
    text: "8. ES6 e Recursos Modernos",
    url: "es6-recursos-modernos",
    description: "Conheça as melhorias introduzidas no ECMAScript 6 (ES6), incluindo a sintaxe mais concisa, arrow functions, template literals, e a introdução de let e const para declaração de variáveis.",
  },
  {
    text: "9. Ferramentas e Ambientes de Dev",
    url: "ferramentas-ambientes-dev",
    description: "Familiarize-se com as ferramentas que tornam o desenvolvimento JavaScript mais eficiente, desde escolher um editor de código até configurar seu ambiente de desenvolvimento para facilitar a codificação e a depuração.",
  },
  {
    text: "10. Testes em JavaScript",
    url: "testes-javascript",
    description: "Descubra a importância dos testes em desenvolvimento de software. Introduza conceitos de teste unitário e frameworks populares, como Jest, para garantir a robustez do seu código.",
  },
  {
    text: "11. Boas Práticas de Código",
    url: "boas-praticas-codigo",
    description: "Aprenda práticas recomendadas para escrever código limpo e legível. Explore a importância de padrões de codificação, como linting, e como eles podem melhorar a consistência do código.",
  },
  {
    text: "12. Projetos Práticos",
    url: "projetos-praticos",
    description: "Aplique seus conhecimentos em projetos práticos. Desenvolva pequenas aplicações ou participe de desafios para solidificar e aplicar os conceitos aprendidos.",
  },
  {
    text: "13. Recursos e Links Úteis",
    url: "recursos-links-uteis",
    description: "Explore uma lista cuidadosamente selecionada de recursos valiosos, incluindo documentações oficiais, tutoriais envolventes e cursos online. Esses recursos adicionais oferecem uma oportunidade para os aprendizes aprofundarem seus conhecimentos e explorarem tópicos específicos em JavaScript.",
  },
  {
    text: "FAQ / Fórum",
    url: "faq-forum",
    description: "Este espaço permite que os visitantes do seu portfólio compartilhem dúvidas, experiências e soluções, fomentando uma comunidade de aprendizado em torno do JavaScript.",
  },
];


const moreLinks = [
  { text: "Github", url: "https://github.com/Rajora0" },
  { text: "Likedin", url: "https://www.linkedin.com/in/rafael-rangel-841b2747/" }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div>

      <h1>Bem vindo ao conceitos basicos do JavaScript!</h1>

      O curso de JavaScript oferece uma abordagem abrangente desde os fundamentos até conceitos avançados, proporcionando uma base sólida para quem deseja dominar essa linguagem de programação essencial para o desenvolvimento web. Os tópicos incluem sintaxe básica, manipulação de arrays e objetos, assincronicidade com Promises e async/await, interação com o DOM, requisições HTTP e manipulação de eventos.
      Além disso, exploramos recursos modernos do ES6, ferramentas de desenvolvimento, testes unitários e boas práticas de código. O curso é enriquecido com projetos práticos para aplicação direta do conhecimento, garantindo que os alunos desenvolvam habilidades práticas e estejam preparados para enfrentar desafios reais no desenvolvimento web 
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <div className={styles.textCenter}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
