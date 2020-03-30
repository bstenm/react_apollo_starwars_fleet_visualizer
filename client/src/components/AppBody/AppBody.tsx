import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styled, { css } from 'styled-components';
import React, { useState, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Fleet from '../Fleet';
import Sidebar from '../Sidebar';
import { apiPath } from '../../config';
import { GET_ALL_SPACESHIPS } from '../../config/queries';
import { ADD_SHOT, ADD_ITEMS } from '../../config/mutations';
import { SpaceshipData } from '../../types';


interface MessageProps {
    readonly error?: boolean;
};

const AppBody = styled.div`
    height: 100%;
    display: flex;
`;

const Visualization = styled.div`
    width: 100%;
    position: relative;
`;

const Message = styled.div<MessageProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    ${props => props.error && css`
        color: red;
  `}
`;

const Component: React.FC = () => {
    const [highlightedItem, setHighlight] = useState('');

    const { data, loading, error, refetch } = useQuery(GET_ALL_SPACESHIPS);

    const [addShot] = useMutation(ADD_SHOT, {
        refetchQueries: (_) => [{
            query: GET_ALL_SPACESHIPS
        }],
    });

    const [addItems] = useMutation(ADD_ITEMS, {
        refetchQueries: (_) => [{
            query: GET_ALL_SPACESHIPS
        }],
    });

    const spaceshipIds: string[] = useMemo(
        () => data ? data.spaceships.map((e: SpaceshipData) => e.id) : [],
        [data]
    );

    const onClickItem = (id: string) => {
        addShot({ variables: { id } });
    }

    const loadData = async () => {
        const { data } = await axios.get(apiPath);
        console.log(data.results);
        const names = data.results.map((e: any) => e.name);
        addItems({ variables: { names } });
    }

    if (loading) return (
        <AppBody>
            <Message>Loading data...</Message>
        </AppBody>
    );

    if (error) return (
        <AppBody>
            <Message error>
                <p>An error ocurred</p>
                <Button
                    variant="primary"
                    onClick={() => refetch()}
                >
                    Please try again!
                </Button>
            </Message>
        </AppBody>
    );

    if (!data || !data.spaceships || !data.spaceships.length) return (
        <AppBody>
            <Message>
                <p>No data found</p>
                <Button
                    variant="primary"
                    onClick={loadData}
                >
                    Get spaceships
                </Button>
            </Message>
        </AppBody>
    );

    return (
        <AppBody>
            <Visualization>
                <Fleet
                    items={spaceshipIds}
                    onClickItem={onClickItem}
                    onPointerOut={() => setHighlight('')}
                    onPointerOver={(id: string) => setHighlight(id)}
                />
            </Visualization>
            <Sidebar
                items={data.spaceships}
                highlightedItem={highlightedItem}
            />
        </AppBody>
    );
};

export default Component;
