const { Book, User } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        }
        user: async () => {
            return User.find({});
        }
    },

    Mutation: {
        
    }
}

module.exports = resolvers; 