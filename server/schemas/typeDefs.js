const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: String!
        description: String!
        _id: ID!
        image: String!
        link: String!
        title: String!
    }

    type User {
        username: String!
        email: String!
        password: String!
        savedBook: [Book]
    }

    type Query {
        book: [Book]
    }

    typeMutation {
        login
        addUser
        saveBook
        removeBook
    }
`;

module.exports = typeDefs