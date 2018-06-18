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
        const { title, author, image, description } = this.props;
        return (
            <Single  { ...{title, author, image, description} } />
        );
    }
}

const mapStateToProps = state => ({
    ...state.listReducer.items,
});

SingleContainer.propTypes = {
    title:  PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fetchItem: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, { fetchItem })(SingleContainer));