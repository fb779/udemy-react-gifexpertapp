import React, {useState} from 'react';
import GifAddCategory from './GifAddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Samurai X']);

  return (
    <>
      <h1>Hola soy la App de Gif</h1>
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
