const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Contact {
    _id: ID
    contactText: String
    contactAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    contacts(username: String): [Contact]
    contact(contactId: ID!): Contact
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addContact(contactText: String!): Contact
    addComment(contactId: ID!, commentText: String!): Contact
    removeContact(contactId: ID!): Contact
    removeComment(contactId: ID!, commentId: ID!): Contact
  }
`;

module.exports = typeDefs;
