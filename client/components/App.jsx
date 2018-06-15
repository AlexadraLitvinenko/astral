import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import fetchItems from '../actions/FetchItems';


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
        this.props.fetchItems();
    }

    render() {
        const { handler } = this;
        console.log('PROPS: ', this.props.items);
        return (
            <Fragment>    
                <h1>EfdSKHE</h1>
                <button onClick={ handler } >CLICK</button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    items: state.listReducer.items,
    loading: state.listReducer.loading,
    error: state.listReducer.error
});
  

export default connect(mapStateToProps, { fetchItems })(App);
