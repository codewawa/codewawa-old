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
  basename: "/presentation/2/", // The base URL of the app (see below)
  hashType: "slash", // The hash type to use (see below)
})
import './style.scss';
import '../../../../node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js';
import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import '../../../../node_modules/prismjs/prism.js';
import jsLogo from './assets/jslogo.png';
import SplashImage from './assets/paints.jpg';
import MDNImage from './assets/mdn-transparent.png';
import w3sImage from './assets/w3s-transparent.png';
import stackOverflowImage from './assets/stackoverflow.jpg';
import webFundamentalsImage from './assets/webfundamentals.png';
import doSomethingGreatImage from './assets/doSomethingGreat.jpg';
import MockupImage from './assets/todoapp.png';
import trelloImage from './assets/trello.png';
import slackImage from './assets/slack.png';
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
      <Slide bgImage={SplashImage} bgDarken={0.6} transition={["spin"]}>
      <Image src={jsLogo} fit height="30vh"/>
        <Heading size={1} textColor="primary">Creating first Javascript project</Heading>
      </Slide>
      <Slide bgColor="black">
          <Heading fit textColor="primary">Any ideas?</Heading>
      </Slide>
      <Slide>
          <Heading fit textColor="black">About CodeWawa</Heading>
      </Slide>
      <Slide bgImage={MockupImage} align="center flex-end">
      <Appear>
      <Heading size={2} textColor="black" bgColor="primary" padding={20}>Mockup</Heading>
      </Appear>
      </Slide>
      <Slide bgColor="black">
      <Heading size={2} textColor="primary">Sum up</Heading>
      <List textColor="white">
      <Appear><ListItem>Wide knowledge of CSS</ListItem></Appear>
      <Appear><ListItem>JS variables & constants</ListItem></Appear>
      <Appear><ListItem>JS functions</ListItem></Appear>
      <Appear><ListItem>JS events</ListItem></Appear>
      </List>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Where should I search?</Heading>
      </Slide>
      <Slide bgColor="white">
        <Image src={MDNImage} />
        <Text textColor="black">developer.mozilla.org</Text>
      </Slide>
      <Slide bgColor="white">
        <Image src={w3sImage} />
        <Text textColor="black">w3schools.com</Text>
      </Slide>
      <Slide bgColor="white">
        <Image src={stackOverflowImage} />
        <Text textColor="black" margin={20}>stackoverflow.com</Text>
      </Slide>
      <Slide bgColor="white">
        <Image src={webFundamentalsImage} />
        <Text textColor="black" margin={20}>developers.google.com/web/fundamentals</Text>
      </Slide>
      <Slide bgColor="black">
      <Heading size={2} textColor="primary">JS knowledge</Heading>
      <List textColor="white">
      <ListItem>variables & constants</ListItem>
      <ListItem>functions</ListItem>
      <ListItem>events</ListItem>
      </List>
      </Slide>
      <Slide bgImage={doSomethingGreatImage}>
      </Slide>
      <Slide>
      <Heading>Project structure</Heading>
        <pre>
        <code className="language-markup">
      {`- index.html
- styles/
-- main.css
- scripts/
-- main.js
`}
</code></pre>
      </Slide>
      <Slide>
      <Heading fit textColor="black">How?</Heading>
      <Appear><Heading size={2} textColor="primary" bgColor="black" padding={20}>Brainstorm</Heading></Appear>
      </Slide>
      <Slide bgColor="black">
            <Heading fit textColor="primary">Stay in touch!</Heading>
      </Slide>
      <Slide bgColor="white">
      <Image src={slackImage} />
      <Image src={trelloImage} />
      </Slide>
<Slide>
  <Heading fit>Thank you for your attention</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>On the basis of MDN resources<br />
  Photos by Unsplash<br />
  Logos taken from companies' sites</Text>
</Slide>
    </Deck>);
  }
}
