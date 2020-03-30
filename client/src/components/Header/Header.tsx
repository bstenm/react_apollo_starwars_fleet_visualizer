import React from 'react';
import styled from 'styled-components';

import logo from './logo.jpeg';

const Header = styled.header`
width: 100%;
background-color: #2A2A2A;
min-height: 5vh;
align-items: center;
justify-content: center;
font-size: calc(10px + 1vmin);
color: white;
position: absolute;
`;

const Title = styled.div`
    padding: 15px;
    text-align: center;
`;

const Logo = styled.div`
    float: left;
    position: absolute;
`;

export default () => (
    <Header>
        <Logo>
            <img src={logo} alt="logo" width="80px" />
        </Logo>
        <Title>
            StarWars fleet visualization
        </Title>
    </Header>
);
