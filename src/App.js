import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  
  const dummmyData = [
    {
    "id": 42,
    "name": "Big Head Morty",
    "status": "unknown",
    "species": "Human",
    "type": "Human with giant head",
    "gender": "Male",
    "origin": {
    "name": "unknown",
    "url": ""
    },
    "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
    "episode": [
    "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/42",
    "created": "2017-11-05T10:15:53.349Z"
    }
  ]

  const [data, setData] = useState(dummmyData);

  useEffect( () => {
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(res => {
      setData(res.data.results);
      console.log(res.data.results);
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(char => <Character name={char.name} />)}
    </div>
  );
}

export default App;
