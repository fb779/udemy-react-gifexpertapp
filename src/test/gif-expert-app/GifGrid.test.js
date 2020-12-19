import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../gif-expert-app/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Samurai X';
  // let wrapper = shallow(<GifGrid category={category} />);
  // let wrapper;

  // beforeEach(() => {
  //   useFetchGifs.mockReturnValue({
  //     data: [],
  //     loading: true,
  //   });
  //   wrapper = shallow(<GifGrid category={category} />);
  // });

  test('Prueba de carga del componente ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs ', () => {
    const gifs = [
      {
        id: 'ABCD',
        title: 'cualquier cosa',
        url: 'http://localhost/cualquier/cosa.png',
      },
      {
        id: 'edfr',
        title: 'cualquier cosa',
        url: 'http://localhost/cualquier/cosa.png',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
