import React, { Component } from 'react'
import "./Toggle.css"

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = {isToggled: true}
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        this.setState(state => ({isToggled: !state.isToggled}))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className={this.state.isToggled ? 'ON' : 'OFF'}>
                    {this.state.isToggled ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}
