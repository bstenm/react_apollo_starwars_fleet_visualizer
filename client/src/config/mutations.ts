import gql from 'graphql-tag';

export const ADD_SHOT = gql`
    mutation addShot($id: String){
        addShot(id:$id) {
            name
            shot
        }
  }
`;

export const ADD_ITEMS = gql`
    mutation addItems($names: [String]){
        addItems(names:$names)
    }
`;