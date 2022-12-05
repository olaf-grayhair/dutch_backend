import mongoose from "mongoose";


const Word = new mongoose.Schema({
    dutchWord: {type: String, require: true},
    englishWord: {type: String, require: true},
    transcription: {type: String, require: true},
    category: {type: String, require: true},
    subCategory: {type: String, require: true},
    img: {type: String},
})

export default mongoose.model('Word', Word)