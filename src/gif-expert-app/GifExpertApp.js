import React, {useState} from 'react';
import PropTypes from 'prop-types';
import GifAddCategory from './GifAddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setcategories] = useState(defaultCategories);

  return (
    <>
      <GifAddCategory setcategories={setcategories} />
      <hr />
      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
};

export default GifExpertApp;
