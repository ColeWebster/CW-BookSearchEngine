const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        username: String!
        email: String!
        password: String!
        savedBook: [Book]
        _id: ID
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    typeMutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: bookInput!): User
        removeBook(bookId: Int!): User
    }
`;

module.exports = typeDefs