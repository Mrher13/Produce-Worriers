const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type item {
    item: ID
    itemType: String
    plu: Int
    Organic: String
    Local: String
    Farm: String
    unitValue: String
    category: String
    retail: Int
    cost: Int
    onOrder: Int
    quantityOnHand: Int
  }

  type itemType {
    item: ID
    itemType: String
    Organic: String
    Local: String
    Farm: String
    plu: Int
  }

  type Profile {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    item: String
    itemType: String
  }
  
  
  

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItemType(itemType: String!, Organic: String!, Local: String!, Farm: String!, plu: Int!): Auth
    addItem(itemType: String!, Organic: String!, Local: String!, Farm: String!, plu: Int!, retail: Int!, cost: Int!, onOrder: Int!, quantityOnHand: Int!): Auth
  }
`;

module.exports = typeDefs;
