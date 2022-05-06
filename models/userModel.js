import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Guest'
    },
    email: {
        type: String,
        unique : true,
        required : true,
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

UserSchema.pre("save", async function () {
    try {
        const User = this.constructor;
        const userExists = await User.find({
            email: this.get("email"),
        })
            .lean()
            .exec();
        if (userExists.length > 0) {
            throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
        }
    } catch (err) {
        throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
    }
});

/* let Users = mongoose.model.users || mongoose.model('users', UserSchema);
export default Users; */

module.exports = mongoose.models.users || mongoose.model("users", UserSchema);
