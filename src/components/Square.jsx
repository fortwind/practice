import React, { Component } from 'react';

class Square extends Component {
    state = {
        value: null
    }
    constructor(props) {
        super(props)
    }
    render() {
        let state = this.state
        return (
            <button className="square" onClick={() => this.setState({ value: 'X' })}>
                {state.value}
            </button>
        )
    }
}

export default Square;