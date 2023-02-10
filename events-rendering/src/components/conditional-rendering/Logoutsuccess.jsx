import React, { Component } from 'react'

export default class Logoutsuccess extends Component {
    render() {
        return (
            <div>
                <h2>You're Logged in</h2>
                <button onClick={this.props.onClick}>Logout</button>
            </div>
        )
    }
}
