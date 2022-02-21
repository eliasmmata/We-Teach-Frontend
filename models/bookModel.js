import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    ISBN: {
        type: String,
    },
    authors: {
        type: Array || String,
    },
    cover: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },

},
    {timestamps: true})

let DatasetBook = mongoose.model.books || mongoose.model('books', bookSchema)
export default DatasetBook
