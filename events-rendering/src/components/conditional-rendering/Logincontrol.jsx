import React, { Component } from 'react'
import Loginsuccess from './Loginsuccess'
import Logoutsuccess from './Logoutsuccess'
import "./loginctrl.css";

export default class Logincontrol extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = { isLoggedIn: false }

  }
  handleLogin(){
    this.setState({isLoggedIn: true})
  }
  handleLogout(){
    this.setState({isLoggedIn: false})
  }
  render() {
    const login = this.state.isLoggedIn
    let button
    if (login) {
      button = <Logoutsuccess onClick={this.handleLogout}/>
    } else {
      button = <Loginsuccess onClick={this.handleLogin}/>
    }
    return (
      <div id="logindiv" className={button.type.name}>{button}</div>
    )
  }
}
