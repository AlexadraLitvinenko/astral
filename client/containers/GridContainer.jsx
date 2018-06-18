import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import Error from '../components/Error';

import fetchItems from '../actions/FetchItems';
import ItemsGrid from '../components/ItemsGrid';

class GridContainer extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { items, loading, error } = this.props;
        
        return error !== null ? <Error error={error}/>: loading ? <Loading /> : items instanceof Array  ? <ItemsGrid items={ items } />: null;
    }
}

const mapStateToProps = state => ({
    items: state.listReducer.items,
    loading: state.listReducer.loading,
    error: state.listReducer.error
});

GridContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
    fetchItems: PropTypes.func.isRequired,
    
};

export default withRouter(connect(mapStateToProps, { fetchItems })(GridContainer));
