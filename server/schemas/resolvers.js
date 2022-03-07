const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, { User }) => {
            return User.findOne({ _id: User});
        }
    },

    Mutation: {
       login: async (parent, { email, password}) => {
          const profile = await  User.findOne({email});

          if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
          }

          const correctPw = await profile.isCorrectPassword(password);

          if (!correctPw) {
              throw new AuthenticationError('Incorrect Password');
          }

          const token = signToken(profile);
          return { token,profile };
        },
        
        addUser = async (parent, { name, email, password }) => {
            const user = await User.create({name, email, password});
            const token = signToken(user);
            return { token, user};
        },

        
    };
module.exports = resolvers; 