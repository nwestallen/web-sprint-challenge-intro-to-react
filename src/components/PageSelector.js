//Add component for choosing Rick & Morty api page to query
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageSelector = (props) => {
    const { nextPage, prevPage, page} = props;

    const Selector = styled.div`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;

        h2 {
            color: #2E382E;
            text-shadow: .8px .8px #50C9CE;
        }
    `;

    const PageButton = styled.button`
        color: white;
        background-color: #9883E5;
        border-radius: 7px;
        margin: 10px 20px;
        font-size: 24px;
    `;

    return(
        <Selector>
            <PageButton onClick={prevPage}>Previous</PageButton>
            <h2>Page {page}</h2>
            <PageButton onClick={nextPage}>Next</PageButton>
        </Selector>
    )

}

export default PageSelector;