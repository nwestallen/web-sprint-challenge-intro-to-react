// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Character = (props) => {

    const { charData } = props;

    const Char = styled.div`
        color: #50C9CE;
        text-shadow: .4px .4px grey;
        margin: 10px 0px;
        padding: 16px 10px;
        background-color: #2E382E;
        p {
            color: lime;
            margin: 3px 0px;
        }
    `;

    return(
        <Char>
            <img src={charData.image} alt={charData.name} />
            <h2>{charData.name}</h2>
            <p>Species: {charData.species}</p>
            <p>Gender: {charData.gender}</p>
            <p>Status: {charData.status}</p>
        </Char>
    )
}

export default Character