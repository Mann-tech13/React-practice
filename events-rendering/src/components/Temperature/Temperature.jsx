import React, { Component } from 'react'
import InputTemp from './InputTemp';
import BoilingCheck from "./BoilingCheck"
const scale = {
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit'
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convert(temperature, converter) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const result = converter(input);
    const rounded = Math.round(result * 1000) / 1000;
    return rounded.toString();
}

export default class Temperature extends Component {
    constructor(props) {
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = { temperature: '', unit: 'celsius' }
    }
    handleCelsiusChange(temperature){
        this.setState({temperature, unit: 'celsius'})
    }
    handleFahrenheitChange(temperature){
        console.log(temperature);
        this.setState({temperature, unit: 'fahrenheit'})
    }
    render() {
        const unit = this.state.unit
        const temperature = this.state.temperature

        const celsius = unit === 'fahrenheit' ? convert(temperature, toCelsius) : temperature
        const fahrenheit = unit === 'celsius' ? convert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <InputTemp unit="celsius" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <InputTemp unit="fahrenheit" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingCheck verify={celsius}/>
            </div>
        )
    }
}
