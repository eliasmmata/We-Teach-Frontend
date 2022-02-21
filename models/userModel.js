import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'guest'
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },

},
    {timestamps: true})

let Dataset = mongoose.model.users || mongoose.model('users', UserSchema)
export default Dataset
