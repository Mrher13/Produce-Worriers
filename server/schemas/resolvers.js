const { item, itemType } = require('../models');

const resolvers = {
    Query: {
        item: async () => {
            return await item.find({}).populate('itemType').populate({
                path: 'masterItem',
                populate: 'itemType',
            });
        },
        itemType: async () => {
            return await itemType.find({}).populate('item');
        },
        class: async (parent, args) => {
            return await Class.findById(args.id).populate('item');
        },
        users: async () => {
            return User.find().populate('thoughts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('thoughts');
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
        additemType: async ({ itemType, Organic, Local, Farm, plu }) => {
            // Create and return the new School object
            return await item.create({ itemType, Organic, Local, Farm, plu });
        },
        addItem: async (parent, { item, itemType, plu, Organic, Local, Farm, unitValue, category, retail, cost, onOrder, quantityOnHand }) => {
            // Create and return the new School object
            return await item.create({ item, itemType, plu, Organic, Local, Farm, unitValue, category, retail, cost, onOrder, quantityOnHand });
        },
    },
};

module.exports = resolvers;