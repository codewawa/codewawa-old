import React, { Component } from 'react';
import './style.scss';
class QuizPresenter extends Component {
  render = () => {
    if(this.props.user.isAuthenicated){
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="page login">
      <div className="login__center">
      <h3>Logowanie</h3>
      <form className="login__center__form"  onSubmit={this.handleSubmit}>
      <input placeholder="Email / nazwa użytkownika" onChange={(e) => this.handleChange(e, 'handle')} disabled={this.state.sent}/>
      <input type="password" placeholder="Hasło" onChange={(e) => this.handleChange(e, 'password')} disabled={this.state.sent}/>
      <button type="submit" disabled={this.state.sent}>Zaloguj się</button>
      </form>
        </div>
          </div>
    );
  }
}
