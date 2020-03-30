import React from 'react';
import styled, { css } from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';

import { SpaceshipData } from '../../types';

const Sidebar = styled.div`
    width: 350px;
    background: #2A2A2A;
    text-align: left;
    padding: 20px;
    padding-top: 50px;
    color: #CCC;
`;

const Item = styled(ListGroup.Item)`
    background: #555;
    padding: 10px;
    ${props => props.highlighted === 'true' && css`
        color: white;
  `}
`;

const RocketIcon = styled.span`
    padding-left: 15px;
`;

const Component: React.FC<{
    items: SpaceshipData[],
    highlightedItem: string,
}> = ({ items, highlightedItem }) => (
    <Sidebar>
        <ListGroup variant="flush">
            {items.map(({ id, name, shot }) =>
                <Item
                    key={name}
                    highlighted={(highlightedItem === id).toString()}
                >
                    {name} > {shot || 0}
                    {highlightedItem === id &&
                        <RocketIcon>
                            <i className="fa fa-rocket"></i>
                        </RocketIcon>
                    }
                </Item>
            )}
        </ListGroup>
    </Sidebar>
);


export default Component
