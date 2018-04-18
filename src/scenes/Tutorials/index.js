import React, { Component } from 'react'
import tutorials from 'content/tutorials';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import './style.scss';
export default class Tutorials extends Component{
  constructor(props){
    super(props)
  }
  render = () => {
    return (
      <div>
        <Header>
          <h1>Tutoriale</h1>
        </Header>

        <Container className="tutorials__container">
          { tutorials.map((el, i) => (<Card key={i} info={el} link={`/tutorial/${i}`}/>)) }
        </Container>

      </div>

    )
  }
}
