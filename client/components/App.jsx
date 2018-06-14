import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style.css';

class App extends Component {
    state = {
        obj: { first: 120, second: 'asdfghjkl', third: this.props.third }
    }

    handler = () => {
        const obj = { ...this.state.obj };
        obj.first = 140;
        this.setState({obj});
    }

    componentDidMount() {
        const { obj } = this.state;
        axios.post('/req', obj).catch(err => console.log(err));
    }

    render() {
        const { handler } = this;
        return (
            <Fragment>    
                <h1>EfdSKHE</h1>
                <button onClick={ handler } >CLICK</button>
            </Fragment>
        );
    }
}

export default App;
