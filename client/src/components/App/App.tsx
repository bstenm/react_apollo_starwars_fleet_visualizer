import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import AppBody from '../AppBody';

const App = styled.div`
  height: 100%;
`;

const Component: React.FC = () => (
  <App>
    <Header />
    <AppBody />
  </App>
);

export default Component;
