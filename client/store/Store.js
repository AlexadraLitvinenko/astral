import { observable, computed, action } from 'mobx';
import axios from 'axios';

class Store {
    @observable items = [];
    @observable error = null;
    @observable loading = true;

    fetchSuccess = data => {
        console.log('GEREE: ', data);
        this.items = data;
        this.loading = false;
    }

    fetchError = error => {
        this.loading = false;
        this.error = error;
    }

    @action fetchItems = () => {
        axios.get('/api/books')
            .then(res => this.fetchSuccess(res.data))
            .catch(error => this.fetchError(error));
    }

    @action fetchItem = id => {
        axios.get('/api/book/:id', { params: { id } })
            .then(res => this.fetchSuccess(res.data))
            .catch(error => this.fetchError(error));
    }
}

const store = new Store();
export default store;