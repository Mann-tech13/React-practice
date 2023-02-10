import React, { Component } from 'react'
import Toggle from './components/event-handling/Toggle'
import Logincontrol from './components/conditional-rendering/Logincontrol'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Toggle /> */}
        <Logincontrol/>
      </div>
    )
  }
}

