import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

import '../styles/Grid.css';

const ItemsGrid = ({ items }) => (
    <div className="grid">
        {items.map(item => (
            <div key={item.id} className="grid__item">
                <img src={item.image} alt="image" className="item__image"/>
                <p className="item__text">{item.title}</p>
                <p className="item__text">{item.author}</p>
                <Link to={`book/${item.id}`} className="item__button">Подробнее</Link>
            </div>
        ))}
        
    </div>
);

ItemsGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
};

export default ItemsGrid;