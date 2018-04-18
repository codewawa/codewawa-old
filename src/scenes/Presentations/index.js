import React, { Component } from 'react'
import presentations from 'content/presentations';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import './style.scss';
export default class Presentations extends Component{
  constructor(props){
    super(props)
  }
  render = () => {
    return (
      <div>
        <Header>
          <h1>Prezentacje</h1>
        </Header>

        <Container className="presentations__container">
          { presentations.map((el, i) => (<Card key={i} info={el} link={`/presentation/${i}`}/>)) }
        </Container>

      </div>

    )
  }
}
