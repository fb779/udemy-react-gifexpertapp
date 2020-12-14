import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GifAddCategory = ({setcategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setcategories((catg) => {
      if (catg.includes(inputValue)) return catg;
      return [inputValue, ...catg];
    });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Valor por defecto" />
    </form>
  );
};

GifAddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};

export default GifAddCategory;
