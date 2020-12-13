import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/ApiGetGifs';

export const useFetchGifs = (category, delay = 0) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((data) =>
      setTimeout(() => {
        setState({data, loading: false});
      }, delay)
    );
  }, [category, delay]);

  return state;
};
