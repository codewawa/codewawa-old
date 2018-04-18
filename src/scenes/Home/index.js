import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CircuitBoard from './circuit-board.svg';
import './style.scss';
export default class Home extends Component {
  render() {
    return (
      <div className="page home">
        <div className="home__header">
                <div className="home__header__center">
              <h1>Code<span>Wawa</span></h1>
              <h3>Projekt Pracowni Projektowania Stron Internetowych w Pałacu Młodzieży w Warszawie</h3>
              <Link to="/presentations"><button>Przejrzyj prezentacje</button></Link>
              <Link to="/tutorials"><button>Zobacz tutoriale</button></Link>
              <div>
              </div>
                    </div>
        </div>
          </div>

    );
  }
}
