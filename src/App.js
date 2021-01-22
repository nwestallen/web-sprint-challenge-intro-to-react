import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Character from './components/Character'
import PageSelector from './components/PageSelector';

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
  const [page, setPage] = useState(1);

  useEffect( () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
      setData(res.data.results);
      console.log(res.data.results);
    })
    .catch(err => console.log(err));
  },[page]);

  const nextPage = () => {
    if(page < 34){setPage(page + 1)};
  }

  const prevPage = () => {
    if(page > 1) {setPage(page - 1)};
  }

  const CharContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100vh;
    margin: auto;
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  `;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <PageSelector nextPage={nextPage} prevPage={prevPage} page={page} />
      <CharContainer>
        {data.map(char => <Character charData={char} />)}
      </CharContainer>
    </div>
  );
}

export default App;
