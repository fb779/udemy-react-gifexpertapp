import {getGifs} from '../../helpers/ApiGetGifs';

describe('Pruebas al servicio de AapiGetGifs', () => {
  test('Debe de consultar 10 elementos de forma predeterminada ', async () => {
    const category = 'one punch';
    const gifs = await getGifs(category);

    expect(gifs.length).toBe(10);
  });

  test('Debe de consultar 0 elementos sin argumento ', async () => {
    const category = '';
    const gifs = await getGifs(category);

    expect(gifs.length).toBe(0);
  });

  test('Debe de consultar N elementos adicionando el limite ', async () => {
    const category = 'goku';
    const limit = 20;
    const gifs = await getGifs(category, limit);

    expect(gifs.length).toBe(limit);
  });
});
