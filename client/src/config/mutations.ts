import gql from 'graphql-tag';

export const ADD_SHOT = gql`
    mutation addShot($id: String){
        addShot(id:$id) {
            name
            shot
        }
  }
`;
