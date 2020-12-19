import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';

import {useFetchGifs} from '../hooks/useFetchGifs';

import './gifgridapp.css';

const GifGrid = ({category}) => {
  const {data: images, loading} = useFetchGifs(category);

  return (
    <section className="gif">
      <section className="gif-title animate__animated animate__lightSpeedInRight">
        <h4>{category}</h4>
      </section>

      {loading && <p className="animate__animated animate__flash">Cargando data...</p>}

      <section className="gif-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </section>
    </section>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
