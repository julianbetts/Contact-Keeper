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

export const ADD_CONTACT = gql`
  mutation addContact($contactText: String!) {
    addContact(contactText: $contactText) {
      _id
      contactText
      contactAuthor
      createdAt
      notes {
        _id
        notesText
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($contactId: ID!, $notesText: String!) {
    addNotes(contactId: $contactId, notesText: $notesText) {
      _id
      contactName
      contactPhone
      contactEmail
      notes {
        _id
        notesText
      }
    }
  }
`;
