import gql from 'graphql-tag';

export const GET_ALL_SPACESHIPS = gql`
    {
        spaceships{
            id
            shot
            name
        }
    }
`;