import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SyntaxBasic = () => (
  <Layout>
    <h1>Sintaxe Básica em JavaScript</h1>
    <p>Nesta seção, exploraremos os conceitos básicos da sintaxe JavaScript. Vamos começar com variáveis, tipos de dados e operadores.</p>

    <h2>Variáveis, Tipos de Dados e Operadores</h2>
    <p>Em JavaScript, as variáveis são usadas para armazenar valores. Os tipos de dados incluem números, strings, booleanos, objetos, entre outros.</p>
    
    <h2>Tipos de Dados em JavaScript</h2>
    <p>JavaScript possui diversos tipos de dados que são fundamentais para a manipulação de informações. Vamos explorar alguns deles:</p>

    <h3>1. Números (Number):</h3>
    <p>Representa valores numéricos, como inteiros ou números de ponto flutuante.</p>

    <h3>2. Strings:</h3>
    <p>Sequências de caracteres. Podem ser definidas com aspas simples ou duplas.</p>

    <h3>3. Booleanos (Boolean):</h3>
    <p>Representa um valor verdadeiro (`true`) ou falso (`false`). Usado em lógica condicional.</p>

    <h3>4. Arrays:</h3>
    <p>Coleção ordenada de valores, acessíveis por índice. Começa com índice zero.</p>

    <h3>5. Objetos:</h3>
    <p>Conjunto de pares chave-valor. Cada valor é acessado através de sua chave.</p>

    <h3>6. Null e Undefined:</h3>
    <p>`null` é usado para representar a ausência intencional de qualquer objeto de valor ou referência. `undefined` é usado para variáveis que não foram atribuídas.</p>

    <h2>Operações em JavaScript</h2>
    <p>JavaScript suporta uma variedade de operações que podem ser aplicadas a diferentes tipos de dados. Vamos explorar algumas das operações mais comuns:</p>

    <h3>Operações Aritméticas:</h3>
    <p>Realizam cálculos matemáticos. Exemplos incluem adição (+), subtração (-), multiplicação (*) e divisão (/).</p>

    <h3>Operações de String:</h3>
    <p>Strings podem ser concatenadas usando o operador de concatenação (+). Além disso, você pode acessar caracteres individuais em uma string usando a notação de colchetes.</p>

    <h3>Operações de Comparação:</h3>
    <p>Comparação de valores usando operadores como igual (==), estritamente igual (===), diferente (!=), estritamente diferente (!==), maior que (&gt;), menor que (&lt;), etc.</p>

    <h3>Operadores Lógicos:</h3>
    <p>Operadores lógicos, como AND (&amp;&amp;), OR (||) e NOT (!), são usados para combinar condições lógicas.</p>

    <h3>Operações de Atribuição:</h3>
    <p>O operador de atribuição (=) é usado para atribuir um valor a uma variável. Além disso, há operadores de atribuição combinados, como += e -=, que realizam uma operação e atribuem o resultado à variável.</p>

    <h3>Operações Bitwise:</h3>
    <p>Operações que manipulam os bits dos números, incluindo AND (&), OR (|), XOR (^), deslocamento para a esquerda (&lt;&lt;) e deslocamento para a direita (&gt;&gt;).</p>


    <h2>Estruturas de Controle de Fluxo em JavaScript</h2>
    <p>As estruturas de controle de fluxo permitem que você controle o fluxo de execução do seu código JavaScript. Vamos explorar as mais comuns:</p>

    <h3>1. If-Else:</h3>
    <p>A estrutura condicional mais básica. Executa um bloco de código se a condição especificada for verdadeira e outro bloco se for falsa. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else">Referência do MDN</Link>.</p>

    <h3>2. Switch:</h3>
    <p>Usado para avaliar uma expressão contra múltiplos casos. Cada caso executa um bloco de código correspondente. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch">Referência do MDN</Link>.</p>

    <h3>3. Loops (For, While, Do-While):</h3>
    <p>Permite a execução repetida de um bloco de código enquanto a condição especificada for verdadeira. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration">Referência do MDN</Link>.</p>

    <h3>4. Ternary Operator:</h3>
    <p>Uma forma concisa de expressar uma instrução condicional. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Referência do MDN</Link>.</p>

    <h2>Orientação a Objetos em JavaScript</h2>
    <p>JavaScript suporta programação orientada a objetos, permitindo a criação de objetos, classes, e herança. Vamos explorar os conceitos básicos:</p>

    <h3>1. Objetos:</h3>
    <p>Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade tem um nome e um valor. Propriedades podem armazenar dados ou funções. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos">Referência do MDN</Link>.</p>

    <h3>2. Funções Construtoras e Protótipos:</h3>
    <p>Para criar objetos semelhantes, você pode usar funções construtoras e protótipos. As funções construtoras são chamadas usando a palavra-chave `new`. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype">Referência do MDN</Link>.</p>

    <h3>3. Classes:</h3>
    <p>JavaScript introduziu classes na versão ECMAScript 2015 (ES6), simplificando a criação de objetos e herança. Classes são uma forma mais sintática de criar objetos e lidar com herança. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes">Referência do MDN</Link>.</p>

    <h3>4. Herança em JavaScript:</h3>
    <p>JavaScript suporta herança através do uso de protótipos. Objetos podem herdar propriedades e métodos de outros objetos. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">Referência do MDN</Link>.</p>


    <h2>Listas e Arrays em JavaScript</h2>
    <p>Em JavaScript, arrays são estruturas de dados que armazenam coleções de elementos. Vamos explorar como criar, manipular e acessar elementos em arrays:</p>

    <h3>1. Criando Arrays:</h3>
    <p>Arrays podem ser criados de várias formas, incluindo a utilização de colchetes `[]` ou o construtor `Array()`. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array">Referência do MDN</Link>.</p>

    <h3>2. Acessando Elementos:</h3>
    <p>Os elementos em um array são acessados através de índices, que começam do zero. Utilize a notação de colchetes para acessar elementos específicos. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Arrays">Referência do MDN</Link>.</p>

    <h3>3. Adicionando e Removendo Elementos:</h3>
    <p>Utilize métodos como `push()`, `pop()`, `shift()`, e `unshift()` para adicionar ou remover elementos do início ou final de um array. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Adicionando_elementos_em_um_array">Referência do MDN</Link>.</p>

    <h3>4. Iterando sobre Arrays:</h3>
    <p>Existem várias formas de percorrer os elementos de um array, como utilizando `for`, `forEach()`, `map()`, `filter()`, e outros métodos de iteração. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Iterando_uma_matriz">Referência do MDN</Link>.</p>

    <h2>Tratamento de Erros em JavaScript</h2>
    <p>Em JavaScript, o tratamento de erros é uma prática essencial para lidar com situações imprevistas. Vamos explorar como você pode implementar tratamento de erros em seu código:</p>

    <h3>1. Bloco Try-Catch:</h3>
    <p>O bloco `try` permite que você teste um bloco de código quanto a erros. Se um erro ocorrer, ele será tratado no bloco `catch`. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch">Referência do MDN</Link>.</p>

    <h3>2. Bloco Finally:</h3>
    <p>O bloco `finally` é executado, quer ocorra um erro ou não, permitindo que você execute código de limpeza. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch#finally">Referência do MDN</Link>.</p>

    <h3>3. Lançando Exceções:</h3>
    <p>Você pode lançar suas próprias exceções usando a palavra-chave `throw`. Isso é útil para indicar erros específicos. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw">Referência do MDN</Link>.</p>

    <h3>4. Objeto Error:</h3>
    <p>O objeto `Error` é usado para representar erros em tempo de execução. Ele contém informações sobre o erro, como a mensagem de erro. <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error">Referência do MDN</Link>.</p>

    <h2>Vídeo Tutorial</h2>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe 
        src="https://www.youtube.com/embed/-QWGj1D636w?si=tdKTSSLbQLoSe96k" // Substitua este link pelo link de incorporação do seu vídeo
        title="Tutorial JavaScript"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    {/* Links para outras seções ou páginas */}
    <ul>

    </ul>

    <Link to="/">Continue sua jornada de aprendizado no nosso site principal</Link>
  </Layout>
);

export const Head = () => <Seo title="Sintaxe Básica em JavaScript" />

export default SyntaxBasic
