import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
    <div>
        <h1>Oops, something went wrong</h1>
        <h2>The error occured</h2>
        <h3>Status: {error.response.status}</h3>
        <h3>Text: {error.response.statusText}</h3>
        <h3>URL: {error.config.url}</h3>
    </div>    
);

Error.propTypes = {
    error: PropTypes.object.isRequired
};

export default Error;