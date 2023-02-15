import React, { Component } from 'react'

export default class BoilingCheck extends Component {
    // constructor(props){
    //     super(props)
    // }
  render() {
    const res = this.props.verify >= 100 ? "Water will Boil" : "Water will not Boil"
    return (
      <div>{res}</div>
    )
  }
}
