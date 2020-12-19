import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../../gif-expert-app/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  // let wrapper = shallow(<GifExpertApp />);
  // beforeEach(() => {
  //   wrapper = shallow(<GifExpertApp />);
  // });

  test('Prueba de carga del componente ', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cargar una lista de categorias especificas ', () => {
    const categories = ['ip man', 'saitama'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
