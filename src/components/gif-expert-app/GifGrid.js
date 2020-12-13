import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import {getGif} from '../../helpers/ApiGetGifs';

import './gifgridapp.css';

const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  // useEffect(async () => {
  //   setImages(await getGif(category));
  // }, []);
  useEffect(() => {
    getGif(category).then(setImages);
  }, [category]);

  return (
    <section className="gif">
      <section className="gif-title">
        <h4>{category}</h4>
      </section>

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
