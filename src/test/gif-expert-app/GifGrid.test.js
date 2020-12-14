import React from 'react';
import {shallow} from 'enzyme';

import GifGrid from '../../gif-expert-app/GifGrid';

describe('Pruebas en <GifGrid />', () => {
  const category = 'Samurai X';
  let wrapper = shallow(<GifGrid category={category} />);
  beforeEach(() => {
    wrapper = shallow(<GifGrid category={category} />);
  });

  test('Prueba de carga del componente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
