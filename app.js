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
        // create a new document
        // const newUser = await User.create({
        //     name: 'miriam Doe',
        //     email: 'miriam@gmail.com',
        //     age: 27,
        //     isActive: true,
        //     tags: ['Tailor', 'Teacher']
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
        // const getSimsatUser = await User.findOne({ name: 'Simsat Doe'});
        // console.log('Get Simsat Doe:', getSimsatUser);

        // get last created user
        // const getLastCreatedUserByUserId = await User.findById(newUser._id)
        // console.log(getLastCreatedUserByUserId, "Get last created user");

        //get first created user
        
        //get only the name and email property
        // const selectedFields = await User.find().select('name email -_id');
        // console.log(selectedFields, 'selected fields');

        /*
        const selectedFields = await User.find().select({
            name: 1,    // include `name`
            email: 1,   // include `email`
            _id: 0      // exclude `_id`
        });

        */
    //    console.log(selectedFields, 'selected fields');

        // get first five users minus first

        //const limitedUsers = await User.find().limit(5).skip(1);

        // const limitedUsers = await User.find()
        // .sort({ name: 1 }) // ascending by name
        // .limit(5)
        // .skip(1);
        // console.log(limitedUsers, "first five users minus first");

        // const sortedUsers = await User.find()
        // .sort({age: -1}) //descending order +1 ascending
        // console.log(sortedUsers, "users sorted by age descending order");

        const countDocuments = await User.countDocuments({
            isActive : false
        });
        console.log(countDocuments, "documents");


    } catch (err) {
        console.error('Error during query examples:', err);
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();