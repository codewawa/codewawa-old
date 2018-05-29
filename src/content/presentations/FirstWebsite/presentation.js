import React, {Component} from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  GoToAction,
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
  basename: "/presentation/3/", // The base URL of the app (see below)
  hashType: "slash", // The hash type to use (see below)
})
import './style.scss';
import '../../../../node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js';
import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import '../../../../node_modules/prismjs/prism.js';
import htmlLogo from './assets/HTML5.svg';
import cssLogo from './assets/CSS3.svg';
import jsLogo from './assets/jslogo.png';
import SplashImage from './assets/start.jpg';
import observeImage from './assets/observe.jpg';
const theme = createTheme({
  primary: '#e34f26'
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
        <Image src={htmlLogo} fit height="30vh"/>
        <Heading size={1}>Pierwsza strona internetowa</Heading>
      </Slide>
      <Slide transition={["slide"]}>
      <Image src={htmlLogo} fit height="30vh"/>
      <Heading size={1}>HTML</Heading>
        <Heading fit>Hiper-Text Markup Language</Heading>
      </Slide>
      <Slide bgColor="rgb(0, 97, 186)" transition={["slide"]}>
      <Image src={cssLogo} fit height="30vh"/>
      <Heading size={1}>CSS</Heading>
        <Heading fit>Cascading Style Sheets</Heading>
      </Slide>
      <Slide bgColor="#f9c300" transition={["slide"]}>
      <Image src={jsLogo} fit height="30vh"/>
        <Heading fit>JavaScript</Heading>
      </Slide>
      <Slide bgColor="white">
        <Image height="30vh"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" />
      <Heading fit textColor="rgb(0, 106, 206)" style={{marginTop:50}}>Visual Studio Code</Heading>
       </Slide>
       <Slide bgColor="black">
      <Heading fit textColor="primary">index.html</Heading>
      <Heading size={3} textColor="white">Nazwa pliku</Heading>
      </Slide>
      <Slide align="center flex-start">
      <Heading fit>Szkielet strony</Heading>
        <pre>
        <code className="language-markup">
      {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Moja pierwsza strona</title>
  </head>
  <body>

  </body>
</html>
`}
</code></pre>
      </Slide>
      
      <Slide>
      <div style={{display:'flex', marginLeft:'-15%'}}>
        <Image src="http://how2html.pl/wp-content/uploads/2014/08/znacznik-otwarcia-html1.jpg"/>
        <Image src="http://how2html.pl/wp-content/uploads/2014/08/znacznik-zamkniecia-html.jpg"/>
        </div>
      </Slide>
 
      <Slide bgImage={observeImage} bgDarken={0.6} transition={["zoom"]} align="center flex-start">
      <Heading fit textColor="white">Let's see</Heading>
      <Appear>
     <Heading size={2} textColor="white">Oh no...</Heading>
</Appear>
      </Slide>
      <Slide bgColor="black">
      <Heading fit textColor="primary">Dlaczego?</Heading>
      <GoToAction slide={6}>Szkielet strony</GoToAction>
      </Slide>
      <Slide>
      <Heading fit textColor="white">Znaczniki</Heading>
      <Heading size={3} textColor="black">tagi</Heading>
        </Slide>
        <Slide>
          <Text textColor="white">Paragraph</Text>
          <Appear>
          <pre>
        <code className="language-markup">
      {`
<p>Paragraph</p>
`}
</code></pre>
</Appear>
          </Slide>
        <Slide>
          <Appear>
      <Heading size={1} textColor="white">Heading 1</Heading>
      </Appear>
      <Appear>
        <div>
      <Heading size={2} textColor="white">Heading 2</Heading>
      <Heading size={3} textColor="white">Heading 3</Heading>
      <Heading size={4} textColor="white">Heading 4</Heading>
      <Heading size={5} textColor="white">Heading 5</Heading>
      <Heading size={6} textColor="white">Heading 6</Heading>
      </div>
      </Appear>
        </Slide>
        <Slide>
        <Heading size={1} textColor="white">Heading 1</Heading>
        <Heading size={6} textColor="white">Heading 6</Heading>
        <Appear>
          <pre>
        <code className="language-markup">
      {`
<h1>Heading 1</h1>
<h6>Heading 6</h6>
`}
</code></pre>
</Appear>
          </Slide>
          <Slide>
            <Image src="https://picsum.photos/1000/500?random" />
            <Appear>
          <pre>
        <code className="language-markup">
      {`
<img src="https://picsum.photos/1000/500" />
`}
</code></pre>
</Appear>
            </Slide>
<Slide>
            <a href="https://google.com" style={{textDecoration: 'underline', cursor: 'pointer'}}>Google</a>
            <Appear>
          <pre>
        <code className="language-markup">
      {`
<a href="https://google.com">Google</a>
`}
</code></pre>
</Appear>
            </Slide>
<Slide bgImage={doSomethingGreatImage}>
</Slide>
<Slide>
  <Heading fit>Dziękuję za uwagę</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>Na podstawie materiałów MDN. </Text>
  <Text margin="0.5em" size={6}>Zdjęcia - Unsplash, Picsum Photos</Text>
</Slide>

    </Deck>);
  }
}
