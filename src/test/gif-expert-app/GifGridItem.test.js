import {shallow} from 'enzyme';
import GifGridItem from '../../gif-expert-app/GifGridItem';

describe('Pruebas en componente <GifGridItem />', () => {
  const title = `Samuray X`;
  const url = `https://localhost.com/api/v1/imagen.png`;
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test('debe cargar el componenete de forma adecuada', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(title);
  });

  test('debe de tener una imagen con el src y el alt', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('El section contenedor debe tener la claseName animated__fadeIn', () => {
    const section = wrapper.find('section');

    expect(section.prop('className').includes('animate__fadeIn')).toBe(true);
  });
});
