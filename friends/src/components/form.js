import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            id: 0,
            name: '',
            age: 54,
            email: '',
        }
    }
    updateField = e => {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    action = () => {
        this.props.action(this.state)
    }
    render() {
        return (
            <div className="add-friend">
                <h1>{this.props.title} friend</h1>
                {this.props.title === 'update' ?
                    <div>
                        <label>id:</label>
                        <input type='number' name='id' onChange={this.updateField}/>
                    </div>
                : null}
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' onChange={this.updateField} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email' onChange={this.updateField} />
                </div>
                <button onClick={this.action}>{this.props.title}</button>
            </div>
        )
    }
}

export default Form