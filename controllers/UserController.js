import Word from "../Word.js";


class UserController {
    async create(req, res) {
        try {
            const { 
                dutchWord, 
                englishWord, 
                transcription, 
                category, 
                subCategory, 
                img 
            } = req.body

            const word = await Word.create({ 
                dutchWord, 
                englishWord, 
                transcription, 
                category, 
                subCategory, 
                img 
             })
            res.json(word)
    
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async findAll(req, res) {
        try {
            const words = await Word.find()
            return res.json(words)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async find(req, res) {
        try {
            const {id} = req.params
            console.log(id, 'id');
            if(!id) {
                res.status(400).json({message: 'no ID'})
            }

            const user = await Word.findById(id)
            return res.json(user)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res ) {
        try {
            const word = req.body
            if(!word._id) {
                res.status(400).json({message: 'no ID'})

            }
            
            const updateWord = await Word.findByIdAndUpdate(word._id, word,  {new: true})
            return res.json(updateWord)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController()