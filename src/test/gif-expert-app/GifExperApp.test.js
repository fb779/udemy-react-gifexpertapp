import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../../gif-expert-app/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  let wrapper = shallow(<GifExpertApp />);
  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
  });

  test('Prueba de carga del componente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
