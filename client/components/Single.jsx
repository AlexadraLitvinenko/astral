import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Single.css';

const Single = ({ title, author, image, description }) => (
    <div className='block'>
        <img src={ image } className='block__image'/>
        <p className='block__text'>{ title }</p>
        <p className='block__text'>{ author }</p>
        <p className='block__text'>{ description }</p>
        <Link to='/'>
            <button>Назад</button>
        </Link>
    </div>
);

Single.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Single;