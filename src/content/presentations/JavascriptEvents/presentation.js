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
  basename: "/presentation/1/", // The base URL of the app (see below)
  hashType: "slash", // The hash type to use (see below)
})
import './style.scss';
import '../../../../node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js';
import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import '../../../../node_modules/prismjs/prism.js';
import jsLogo from './assets/jslogo-transparent.png';
import SplashImage from './assets/signal.jpg';
import doSomethingGreatImage from './assets/doSomethingGreat.jpg';
import wrongWayImage from './assets/wrongWay.jpg';
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

        <Heading size={1}>Javascript Events</Heading>
      </Slide>
      <Slide bgImage={SplashImage} bgDarken={0.5} transition={["spin"]} align="center flex-end">
      <Appear>
        <Heading size={3} fit textColor="primary">Event, czyli co?</Heading>
      </Appear>
      </Slide>
      <Slide>
          <Heading size={2}>Dynamiczność</Heading>
      </Slide>
      <Slide bgColor="black">
      <Heading size={2} textColor="primary">Basic</Heading>
      <List textColor="white">
      <Appear><ListItem>click</ListItem></Appear>
      <Appear><ListItem>mouseenter</ListItem></Appear>
      <Appear><ListItem>mouseout</ListItem></Appear>
      <Appear><ListItem>change</ListItem></Appear>
      <Appear><ListItem>input</ListItem></Appear>
      <Appear><ListItem>cut</ListItem></Appear>
      <Appear><ListItem>copy</ListItem></Appear>
      <Appear><ListItem>paste</ListItem></Appear>
      </List>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Easy...</Heading>
        <Appear><Heading fit textColor="white">Have done it</Heading></Appear>
      </Slide>
      <Slide align="center flex-start">
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
    <button onClick="doSomething()">Click me!</button>
    <script src="./scripts.js"></script> <!-- <= doSomething function inside -->
  </body>
</html>
`}
</code></pre>
      </Slide>
      <Slide bgImage={wrongWayImage} bgDarken={0.7} transition={["zoom"]}>
      </Slide>

      <Slide bgImage={doSomethingGreatImage}>
      </Slide>
      <Slide align="flex-start">
      <Layout>
            <Fill>
          <pre>
          <code className="language-javascript">
            {`document.querySelector('button').addEventListener('click', function()\{
              alert("I'm professional!");
            \})`}
  </code></pre>
  </Fill>
        <Appear>
    <Fill>

          <pre>
          <code className="language-javascript">
            {`document.querySelector('button').onClick = function()\{
              alert('Wrong way')
            \}`}
  </code></pre>

        </Fill>
        </Appear>
        </Layout>
      </Slide>

<Slide>
  <Heading fit>Dziękuję za uwagę</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>Na podstawie materiałów MDN. Zdjęcia - Unsplash</Text>
</Slide>
    </Deck>);
  }
}
