import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <input name={this.props.name} type={this.props.type} value={this.state.value} onChange={this.handleChange}/>
        )
    }
}
