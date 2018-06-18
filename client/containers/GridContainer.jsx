import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import fetchItems from '../actions/FetchItems';
import ItemsGrid from '../components/ItemsGrid';

class GridContainer extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { items } = this.props;
        return  items instanceof Array  ? <ItemsGrid items={ items } />: null;
    }
}

const mapStateToProps = state => ({
    items: state.listReducer.items,
    loading: state.listReducer.loading,
    error: state.listReducer.error
});

GridContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
    fetchItems: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, { fetchItems })(GridContainer));
