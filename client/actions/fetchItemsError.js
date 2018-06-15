export default error => ({
    type: 'FETCH_ITEMS_FAILURE',
    payload: { error }
});