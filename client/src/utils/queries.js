import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;



// // { this WORKS!!!
//   items {
//     Organic
//     unitValue
//   }
// }

// // {
//   itemTypes {
//     Organic
//     Local
    
//   }
// }


// {
//   user(userId: "61b02af176d0ff58dcc9466b"){
//     username 
//     email
//     password
//   }
// }


// { find one
//   item(itemId: "61b02af176d0ff58dcc94661"){
//    category
//   }
// }