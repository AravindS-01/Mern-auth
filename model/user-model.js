const mongoose =require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
    type: String,
    required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
});

module.exports = mongoose.model('User',userSchema);

// model => create collection
// exports => other file can access the User model
// In Mongodb the User is saved as 'users' first letter small and plural form .. 