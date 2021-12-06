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
    Local: Int
    Farm: Professor
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    class(id: ID!): Class
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addSchool(item: String!, itemType: String!, plu: Int!, Organic: String!, Local: String!, Farm: String!, unitValue: String!, category: String!, retail: Int!, cost: Int!, onOrder: Int!, quantityOnHand: Int!): item
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
