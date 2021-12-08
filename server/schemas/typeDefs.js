const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    item: String
    itemType: String
    plu: Int
    Organic: Boolean
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
    Organic: Boolean
    Local: String
    Farm: String
    plu: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    # There is now a field to store the user's password
    password: String
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    items: [Item]!
    user(userId: ID!): User
    item(itemId: ID!): Item
    itemTypes: [itemType]
  }
  
  
  

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItemType(itemType: String!, Organic: String!, Local: String!, Farm: String!, plu: Int!): itemType
    addItem(itemType: String!, Organic: Boolean!, Local: String!, Farm: String!, plu: Int!, retail: Int!, cost: Int!, onOrder: Int!, quantityOnHand: Int!): Item
  }
`;

module.exports = typeDefs;
