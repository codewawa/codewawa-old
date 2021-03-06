import React, { Component } from 'react'
import tutorials from 'content/tutorials';
import Container from 'components/Container'
import './style.scss'
export default class Tutorial extends Component{
  constructor(props){
    super(props)
  }
  render = () => {
    let tutorial = tutorials[this.props.match.params.id];
    return (
    <div className="tutorial">
      <img src={tutorial.image} alt="" className="tutorial__image"/>
      <Container narrow>
        <div className="tutorial__heading">
          <h1>{tutorial.title}</h1>
          <h4>{tutorial.author}</h4>
        </div>

              <div className="tutorial__article">
                <tutorial.component />
                <div className="tutorial__article__end">
                <p>Chcesz, abyśmy opublikowali tutorial na konkretny temat? 
                  A może chcesz umieścić tu swój artykuł? <a href="https://goo.gl/forms/phI9WIXU64LqjHvy1">Wypełnij formularz!</a>
                  </p>
                </div>
           
              </div>

      </Container>
    </div>
    )
  }
}
