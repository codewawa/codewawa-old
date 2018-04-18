import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import presentations from 'content/presentations';
import './style.scss';
export default class Presentation extends Component{
  constructor(props){
    super(props)
    this.state = { presentationHelperDone: Boolean(sessionStorage.presentationHelperDone)}
    if(props.match.params.id){
    }
  }
setPresentationHelperDone = () => {
  this.setState({presentationHelperDone:true})
  sessionStorage.presentationHelperDone = true;
}
  render = () => {
    let presentation = presentations[this.props.match.params.id];
    return (
  <div className="presentation">
  <div className={`presentation__helper ${!this.state.presentationHelperDone ? 'active' : ''}`}>Najedź na niebieski pasek, aby wyświetlić menu</div>
  <header className="presentation__header" onMouseEnter={this.setPresentationHelperDone} onClick={this.setPresentationHelperDone}>
    <span className="presentation__return"><Link to="/presentations">Powrót</Link></span>
    <div className="presentation__details">
      <h3 className="presentation__title">{presentation.title}</h3>
    </div>
  </header>
  <div className="presentation__wrapper">
<presentation.component />

    </div>
  </div> )


  }
}
