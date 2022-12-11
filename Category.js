import mongoose from "mongoose";


const Category = new mongoose.Schema({
    category: {type: String, require: true, unique: true,},
    subCategory: [{type: String, require: true}],
    bool: { type: Boolean, default: false },
})

export default mongoose.model('Category', Category)