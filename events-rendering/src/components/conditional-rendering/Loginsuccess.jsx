import React, { Component } from 'react'

export default class Loginsuccess extends Component {

    render() {
        return (
            <div>
                <h2>You logged Out</h2>
                <button onClick={this.props.onClick}>Login</button>
            </div>
        )
    }
}
