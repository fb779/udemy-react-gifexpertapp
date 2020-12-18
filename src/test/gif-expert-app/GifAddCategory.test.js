import React from 'react';
import '@testing-library/jest-dom';

import {shallow} from 'enzyme';
import GifAddCategory from '../../gif-expert-app/GifAddCategory';

describe('prubeas en <GifAddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<GifAddCategory setcategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<GifAddCategory setcategories={setCategories} />);
  });

  test('Carga del componenete <GifAddCategory /> ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar el valor de la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'saitama';

    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la información con submit ', () => {
    wrapper.find('form').simulate('submit', {preventDefault() {}});

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar al setCategory y limpiar la caja de texto ', () => {
    const value = 'saitama';

    wrapper.find('input').simulate('change', {target: {value}});
    wrapper.find('form').simulate('submit', {preventDefault() {}});

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value').trim()).toBe('');
  });
});
