import './App.css';
import useData from './hooks/useData';
import React from 'react';

function App() {
  const [link, setLink] = React.useState(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [data, setUrl] = useData(link);

  console.log(data);

  const handleChange = (e) => {
    setLink(e.target.value);
    setUrl(e.target.value);
  };

  return (
    <div className='App'>
      <input
        type='text'
        value={link}
        onChange={(e) => {
          handleChange(e);
        }}
        style={{
          width: '400px',
        }}
      />
      {data.isLoading && <h2>Loading...</h2>}
      {data.data?.map((item) => (
        <h3 key={item.id}>{item.body}</h3>
      ))}
    </div>
  );
}

export default App;
