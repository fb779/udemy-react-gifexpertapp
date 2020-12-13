import React from 'react';
// import PropTypes from 'prop-types';

import './gifgriditem.css';

// const GifGridItem = ({id, title, small, medium, large}) => {
const GifGridItem = ({title, url}) => {
  return (
    <section className="grid-item animate__animated animate__fadeIn">
      <div>
        <img src={url} alt={title} />
      </div>
      <p>{title}</p>
    </section>
  );
};

// GifGridItem.propTypes = {};

export default GifGridItem;
