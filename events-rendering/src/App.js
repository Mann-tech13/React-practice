import React, { Component } from 'react'
import Toggle from './components/event-handling/Toggle'
import Logincontrol from './components/conditional-rendering/Logincontrol'
import Form from './components/form-handling/Form'
import Temperature from "./components/Temperature/Temperature"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Toggle /> */}
        {/* <Logincontrol/> */}
        {/* <Form/> */}
        {<Temperature/>}
      </div>
    )
  }
}

