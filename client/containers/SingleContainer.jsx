import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx'; 
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
 
import Single from '../components/Single';

@inject('store')
@observer
class SingleContainer extends Component {
    componentDidMount() {
        const { match: { params: { id } }, store: { fetchItem } } = this.props;
        fetchItem(id);
    }

    render() {
        const { items } = toJS(this.props.store);
        console.log('REV: ', ...items);
        return (
            <Single  { ...items[0] } />
        );
    }
}

SingleContainer.propTypes = {
    store: PropTypes.objectOf(PropTypes.shape({
        fetchItem: PropTypes.func.isRequired,
        items: PropTypes.object.isRequired,
    })),
    match: PropTypes.objectOf(PropTypes.shape({
        params: PropTypes.objectOf(PropTypes.shape({
            id: PropTypes.string.isRequired
        }))
    })).isRequired
};

export default withRouter(SingleContainer);