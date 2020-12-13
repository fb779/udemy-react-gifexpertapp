import React, {useState} from 'react';
import GifAddCategory from './GifAddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Samurai X']);

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

export default GifExpertApp;
