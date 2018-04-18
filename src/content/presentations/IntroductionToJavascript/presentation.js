import React, {Component} from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';
import createTheme from "spectacle/lib/themes/default";
import createHistory from "history/createHashHistory";
const history = createHistory({
  basename: "/presentation/0/", // The base URL of the app (see below)
  hashType: "slash", // The hash type to use (see below)
})
import './style.scss';
import '../../../../node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js';
import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import '../../../../node_modules/prismjs/prism.js';
import jsLogo from './assets/jslogo-transparent.png';

const theme = createTheme({
  primary: '#f9c300'
}, {primary: 'Raleway'})
export default class extends Component {
  constructor(props) {
    super(props)
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    console.log(error, info);
  }
  render() {
    return (<Deck history={history} theme={theme} transition={["fade"]}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Image src={jsLogo} fit height="30vh"/>

        <Heading fit="fit">Wprowadzenie do JavaScript'u</Heading>
      </Slide>
      <Slide>
        <Heading size={3} fit>Let's back to 90s...</Heading>
      </Slide>
      <Slide>
        <Heading size={3} textColor="white" margin="1em">Główny cel</Heading>
        <Appear>
          <Heading size={2}>Manipulacja dokumentem</Heading>
        </Appear>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Jak umieścić JS na naszej stronie?</Heading>
      </Slide>
      <Slide>
        <pre>
        <code className="language-markup">
      {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>Awesome website</title>
  </head>
  <body>
    <!-- Rest of your site -->
    <script src="./scripts.js"></script>
  </body>
</html>
`}
</code></pre>
      </Slide>
      <Slide>
<Heading size={4}>Zmienne</Heading>
        <Appear>
          <pre>
          <code className="language-javascript">
            let message = 'Hello world!'
  </code></pre>
        </Appear>
        <Appear>
<Heading size={4} style={{marginTop: '2em'}}>Stałe</Heading>
        </Appear>
        <Appear>
          <pre>
          <code className="language-javascript">
            const PI = 3.14
  </code></pre>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3} fit>Instrukcja warunkowa</Heading>
        <Appear>
          <pre><code className="language-javascript">
  {`if(true)\{
    doSomething();
  }else\{
    doSomethingElse();
  }`}
  </code></pre>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3} fit>Czy działa?</Heading>
        <Appear><Heading size={4} textColor="white" margin="1em">Sprawdź w konsoli</Heading></Appear>
      </Slide>
      <Slide>
  <pre><code className="language-javascript">
{`let x = 4;
console.log(x); // 4
`}
</code></pre>
</Slide>
<Slide>
  <Heading>Napiszmy coś!</Heading>
  <Text margin="2em">Jeżeli 2 jest większe od zera, wypisz "2 jest liczbą dodatnią", w przeciwnym wypadku wypisz "2 jest liczbą niedodatnią"</Text>
</Slide>
  <Slide>
    <Heading fit textColor="black">Operatory logiczne</Heading>
    <pre>
      <code className="language-javascript">
{`if(true == false) // jest równe
if(true === false) // jest identyczne

if(true != false) // nie jest równe
if(true !== false) // nie jest identyczne

if(2 > 1) // jest większe
if(2 < 1) // jest mniejsze
  `}
      </code>
    </pre>
  </Slide>
  <Slide>
    <Heading size={5}>Coś extra...</Heading>
        <pre><code className="language-javascript">
{`let y = 2;
let z = 3;
console.log(y + z); // ?
`}
</code></pre>
<Appear><pre><code className="language-javascript">console.log(y + z); // 5   Dlaczego nie 4?</code></pre></Appear>
      </Slide>
      <Slide>
        <pre>
        <code className="language-markup">
      {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Awesome website</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <input />
    <script src="./scripts.js"></script>
  </body>
</html>
`}
</code></pre>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Document Object Model</Heading>
        <Heading size={4} textColor="white">DOM</Heading>
      </Slide>
      <Slide>
<Layout>
      <Fill>
        <pre><code className="language-javascript">const element = document.getElementByClassName('elementClass')</code></pre>
        <pre><code className="language-javascript">const element = document.getElementById('elementID')</code></pre>
        <pre><code className="language-javascript" style={{marginTop: '2em'}}>const element = document.getElementByTagName('div')</code></pre>
      </Fill>
</Layout>
</Slide>
<Slide>
  <Layout>
        <Fill>
        <pre><code className="language-javascript">const element = document.querySelector('#elementID')</code></pre>
        <pre><code className="language-javascript">const element = document.querySelector('.elementClass')</code></pre>
        <pre><code className="language-javascript">const element = document.querySelector('div')</code></pre>
    </Fill>
</Layout>
      </Slide>
      <Slide>
        <Heading textColor="black" fit>Modyfikowanie elementu</Heading>
      </Slide>
      <Slide>
        <Heading size={3}>Edycja tekstu</Heading>
        <pre><code className="language-javascript">element.innerHTML = 'Foo'</code></pre>
        <pre><code className="language-javascript">element.innerText = 'Bar'</code></pre>
        <Appear>
          <pre><code className="language-javascript">{`element.innerText = '<b>Foo bar</b>'`}</code></pre>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3}>Edycja stylów</Heading>
        <pre><code className="language-javascript">element.style.color = 'red'</code></pre>
        <pre><code className="language-javascript">element.style.background = '#000'</code></pre>
      </Slide>
      <Slide>
        <pre><code className="language-css">
{`#element\{
  font-size: 2em;
}
`}</code></pre>
<pre><code className="language-javascript">element.style.fontSize = '2em'</code></pre>
      </Slide>
      <Slide>
        <Heading size={3} textColor="white">Dodatkowe</Heading>
        <List>
        <ListItem>Jak ustawić wartość pola tekstowego?</ListItem>
        <ListItem>Jak pobrać wartość pola tekstowego?</ListItem>
        <ListItem>Dynamiczne dodawanie klasy do elementu</ListItem>
        </List>
      </Slide>
<Slide>
<Heading>Gdzie szukać?</Heading>
<List>
  <ListItem>StackOverflow</ListItem>
  <ListItem>Mozilla Developer Network</ListItem>
  <ListItem>Youtube</ListItem>
  <ListItem>Scotch</ListItem>
  <ListItem>w3schools</ListItem>
</List>
</Slide>
<Slide>
  <Heading fit>Dziękuję za uwagę</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>Na podstawie materiałów MDN.</Text>
</Slide>
    </Deck>);
  }
}
