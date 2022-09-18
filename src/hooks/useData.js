import React from 'react';
import axios from 'axios';
import dataReducer from '../reducer/useDataReducer';

export default function (initUrl) {
  const [url, setUrl] = React.useState(initUrl);
  const [state, dispatch] = React.useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios.get(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, [url]);

  return [state, setUrl];
}
