
import './App.css';
import { Component } from 'react';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((apiData) =>{
      setData(apiData.message);
    });
  };
 useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((resp) => resp.json())
  .then((apiData) => {
    setData(apiData.message);
  });
 }, []);
  
 return(
  <div>
  <h1 style={{textAlign:"center"}}>
  Welcome to Dogz World 🐶
  </h1>
  <button onClick={fetchData}> Dog Generator</button>
  <img width={300} src={data}/>
  </div>
 );
}

export default App;