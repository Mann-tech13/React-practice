import React, { Component } from 'react'
import "./Form.css"

export default class Form extends Component {
    // static bool
    constructor(props){
        super(props)
        // this.bool = false
        this.state = {
            name: '',
            email: '',
            department: '',
            employee_id: '',
            address: '',
            bool: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        // e.preventDefault()
        // console.log(this.state)
    }

    handleSubmit(){
        this.setState({bool: true})
        // console.log(this.bool)
    }
    render() {
        return (
            <div className='form' >
                <form action="">
                    <div className="">
                        <input type="text" name='name' value={this.state.name} placeholder='Enter your name' onChange={this.handleChange}/>
                    </div>
                    <div className="">
                        <input type="email" name="email" value={this.state.email} id="" placeholder='Enter your email' onChange={this.handleChange}/>
                    </div>
                    <div className="">
                        <select name="department" id="" onChange={this.handleChange}>
                            <option value="None">Select any department</option>
                            <option value="Google">Google</option>
                            <option value="Microsoft">Microsoft</option>
                            <option value="Netflix">Netflix</option>
                        </select>

                    </div>
                    <div className="" >
                        <input type="text" name="employee_id" value={this.state.employee_id} id="" placeholder='Enter your employee Id' onChange={this.handleChange}/>
                    </div>
                    <div className="">
                        <textarea name="address" value={this.state.address} id="" cols="30" rows="5" placeholder='Enter your address' onChange={this.handleChange}></textarea>
                    </div>
                    <input type="button" value="submit" onClick={this.handleSubmit}/>
                </form>
                <div className="dynamic">
                    {
                        this.state.bool === true ?
                        <div className="">
                            <div className="">
                                {this.state.name}
                            </div>
                            <div className="">
                                {this.state.email}
                            </div>
                            <div className="">
                                {this.state.department}
                            </div>
                            <div className="">
                                {this.state.employee_id}
                            </div>
                            <div className="">
                                {this.state.address}
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        )
    }
}
