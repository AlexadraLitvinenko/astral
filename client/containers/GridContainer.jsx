import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';

import Error from '../components/Error';
import Loading from '../components/Loading';
import ItemsGrid from '../components/ItemsGrid';

@inject('store')
@observer
class GridContainer extends Component {
    componentDidMount() {
        const { fetchItems } = this.props.store;
        this.props.store.fetchItems();
    }

    render() {
        const { items, loading, error } = this.props.store;
        return error !== null ? <Error error={error}/>: loading ? <Loading /> : items instanceof Array  ? <ItemsGrid items={ toJS(items) } />: null;
    }
}

GridContainer.propTypes = {
    store: PropTypes.objectOf(
        PropTypes.shape({
            items: PropTypes.instanceOf(Object).isRequired,
            loading: PropTypes.bool.isRequired,
            error: PropTypes.object.isRequired,
            fetchItems: PropTypes.func.isRequired
        })
    ).isRequired
};

export default GridContainer;