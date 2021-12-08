import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEMTYPE = gql`
  mutation addItemType($itemType: String!, $Organic: String!, $Local: String!, $Farm: String!, $plu: Int!) {
    
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $itemType: String!, 
    $Organic: String!, 
    $Local: String!, 
    $Farm: String!, 
    $plu: Int!, 
    $retail: Int!, 
    $cost: Int!, 
    $onOrder: Int!, 
    $quantityOnHand: Int!
  ) 
`;


// mutation addUser($username: String!, $email: String!, $password: String!) {
//   addUser(username: $username , email: $email, password: $password) {
//     user {
//       username
//       email
//     }
//     token
//   }
// }