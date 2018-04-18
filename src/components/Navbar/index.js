import React, {Component} from 'react';
import './style.scss';
import { NavLink, withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid';

class Navbar extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {menuActive: false}
  }
  toggleMenu = () => this.setState({menuActive: !this.state.menuActive})
  closeMenu = () => this.setState({menuActive: false})

  render = () => {
    let isPresentation = this.props.location.pathname.includes('/presentation/');
    return (<div className="navbar" style={{display: isPresentation ? 'none' : 'flex'}}>
      <span className="navbar__bars">
        <FontAwesomeIcon icon={!this.state.menuActive ? faBars : faTimes} onClick={this.toggleMenu}/>
      </span>
        <ul className={`navbar__menu ${this.state.menuActive ? 'active' : ''}`}>
          <li><NavLink activeClassName="active" to="/about" onClick={this.closeMenu}>O Nas</NavLink></li>
          <li><NavLink activeClassName="active" to="/tutorials" onClick={this.closeMenu}>Tutoriale</NavLink></li>
          <li><NavLink activeClassName="active" to="/presentations" onClick={this.closeMenu}>Prezentacje</NavLink></li>
        </ul>
          <span className="navbar__brand"><NavLink activeClassName="active" to="/" onClick={this.closeMenu}>Code<span>Wawa</span></NavLink></span>
          <ul className={`navbar__menu ${this.state.menuActive ? 'active' : ''}`}>
          <li><NavLink activeClassName="active" to="/projects" onClick={this.closeMenu}>Projekty</NavLink></li>
          <li><NavLink activeClassName="active" to="/meetups" onClick={this.closeMenu}>Meetupy</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact" onClick={this.closeMenu}>Kontakt</NavLink></li>
        </ul>
    </div>);
  }
}

export default withRouter(Navbar);
