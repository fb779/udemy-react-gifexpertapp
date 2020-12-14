import React from 'react';
import PropTypes from 'prop-types';

import './gifgriditem.css';

// const GifGridItem = ({id, title, small, medium, large}) => {
const GifGridItem = ({title, url}) => {
  return (
    <section className="grid-item animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </section>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
