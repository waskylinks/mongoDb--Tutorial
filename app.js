require('dotenv').config(); // Load env variables
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then (() =>
    console.log('Connected to MongoDB'))
    .catch((err) =>
    console.error('Error connecting to MongoDB:', err)
);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});

//create user model
const User = mongoose.model('User', userSchema);

//create a simple function
async function runQueryExamples() {
    try{
        //create a new document
        // const newUser = await User.create({
        //     name: 'Simsat Doe',
        //     email: 'sim1@gmail.com',
        //     age: 25,
        //     isActive: true,
        //     tags: ['Developer']
        // });

        // const newUser = new User({
        //     name: 'Jslow Doe',
        //     email: 'jslow@gmail.com',
        //     age: 30,
        //     isActive: true,
        //     tags: ['Developer', 'designer', 'blogger']
        // });

        // await newUser.save();

        // console.log('New User Created:', newUser);

        //get all users

        // const allUsers = await User.find();
        // console.log('All Users:', allUsers);

        //get specific things from users

        // const getUsersActiveStatus = await User.find({ isActive: true });
        // console.log('Users with isActive false:', getUsersActiveStatus);

        //get single simsat doe

        const getSimsatUser = await User.findOne({ name: 'Simsat Doe'});
        console.log('Get Simsat Doe:', getSimsatUser);

    } catch (err) {
        console.error('Error during query examples:', err);
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();