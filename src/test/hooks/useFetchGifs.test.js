// import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('pruebas en useFetchGifs', () => {
  const category = 'One pounch';
  test('Debe retornar el estado inicial ', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
    const {data, loading} = result.current;
    await waitForNextUpdate(); // espera de cambios y limpieza de estados

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('retornar un arreglo de imagenes y loading false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
    await waitForNextUpdate(); // espera de cambios y limpieza de estados
    const {data, loading} = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
