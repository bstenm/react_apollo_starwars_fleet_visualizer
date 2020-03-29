import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
width: 100%;
padding: 10px;
background-color: #2A2A2A;
min-height: 5vh;
align-items: center;
justify-content: center;
font-size: calc(10px + 1vmin);
color: white;
position: absolute;
`;

const Title = styled.div`
    text-align: center;
`;

export default () => {

    return (
        <Header>
            <Title>
                StarWars fleet visualization
            </Title>
        </Header>
    );
};
