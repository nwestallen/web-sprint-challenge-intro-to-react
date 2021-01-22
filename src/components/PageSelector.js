//Add component for choosing Rick & Morty api page to query
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageSelector = (props) => {
    const { nextPage, prevPage, page} = props;

    const PageButton = styled.button`
        color: white;
        background-color: #9883E5;
        border-radius: 7px;
        margin: 10px 20px;
        font-size: 24px;
    `;

    return(
        <div>
            <PageButton onClick={prevPage}>Previous</PageButton>
            <h2>Page {page}</h2>
            <PageButton onClick={nextPage}>Next</PageButton>
        </div>
    )

}

export default PageSelector;