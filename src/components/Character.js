// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Character = (props) => {

    const { name, setName } = props;

    const Char = styled.div`
        background-color: grey;
    `;

    return(
        <Char>
            <h2>It's RICK</h2>
        </Char>
    )
}

export default Character