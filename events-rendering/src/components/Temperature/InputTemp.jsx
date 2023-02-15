import React, { Component } from 'react'

export default class InputTemp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const unit = this.props.unit
        const temperature = this.props.temperature
        return (
            <div>
                <div>Enter temperature in {unit}</div>
                <input value={temperature} onChange={this.handleChange} />
            </div>
        )
    }
}
