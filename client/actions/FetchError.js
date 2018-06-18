export default error => ({
    type: 'FETCH_FAILURE',
    payload: { error }
});