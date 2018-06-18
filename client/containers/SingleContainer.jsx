import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Single from '../components/Single';

import fetchItem from '../actions/FetchItem';

class SingleContainer extends Component {
    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        this.props.fetchItem(id);
    }

    render() {
        const { items } = this.props;

        return (
            <Single  { ...items } />
        );
    }
}

const mapStateToProps = state => ({
    items: state.listReducer.items,
});

SingleContainer.propTypes = {
    items: PropTypes.object.isRequired,
    fetchItem: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, { fetchItem })(SingleContainer));