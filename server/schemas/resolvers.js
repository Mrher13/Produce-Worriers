const { Item, ItemType, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        items: async () => {
            const response = await Item.find({})
            // .populate('itemType')
            // // .populate({
            //     path: 'masterItem',
            // //     populate: 'itemType',
            // });
            console.log(response);
            return response
        },
        item: async (parent, {itemId}) => {
            const response = await Item.findOne({ _id: itemId });
            
            // await Item.find({ _id: itemId });
            console.log(response);
            return response
        },
        itemTypes: async () => {
            return await ItemType.find({});
        },
        // profiles: async () => {
        //     return Profile.find();
        //   },
          user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
          },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            // First we create the user
            const user = await User.create({ username, email, password });
            // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
            const token = signToken(user);
            // Return an `Auth` object that consists of the signed token and user's information
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ email });

            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, return an Authentication error stating so
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // If email and password are correct, sign user into the application with a JWT
            const token = signToken(user);

            // Return an `Auth` object that consists of the signed token and user's information
            return { token, user };
        },
        addItemType: async (parent, { itemType, Organic, Local, Farm, plu, retail, cost, onOrder, quantityOnHand  }) => {
            // Create and return the new School object  
            return await ItemType.create({ itemType, Organic, Local, Farm, plu, retail, cost, onOrder, quantityOnHand });
        },
        addItem: async (parent, { item, itemCategory, plu, unitValue, category  }) => {
            // Create and return the new School object
            return await Item.create({ item, itemCategory, plu, unitValue, category });
        },
    },
};

module.exports = resolvers;