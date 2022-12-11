import Category from "../Category.js";
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

            const ifWord = await Word.findOne({ category: req.body.dutchWord })

            if (ifWord) {
                return res.status(404).json({ message: 'This word already exist !' })
            }

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
    async createCategory(req, res) {
        try {
            const file = {
                ...req.body,
                category: req.body.category,
                subCategory: req.body.subCategory,
            }

            const ifCategory = await Category.findOne({ category: req.body.category })

            if (ifCategory) {
                return res.status(404).json({ message: 'This category already exist !' })
            }

            const newCategory = await Category.create(file)
            res.json(newCategory)

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

    async findAllCategories(req, res) {
        console.log('find');
        try {
            const category = await Category.find()
            // console.log(category, 'find');
            return res.json(category)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async find(req, res) {
        try {
            const { id } = req.params
            console.log(id, 'id');
            if (!id) {
                res.status(400).json({ message: 'no ID' })
            }

            const user = await Word.findById(id)
            return res.json(user)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const word = req.body
            if (!word._id) {
                res.status(400).json({ message: 'no ID' })

            }

            const updateWord = await Word.findByIdAndUpdate(word._id, word, { new: true })
            return res.json(updateWord)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async updateCategory(req, res) {
        try {
            const category = req.body
            if (!category._id) {
                res.status(400).json({ message: 'no ID' })

            }

            const updateCategory = await Category.findByIdAndUpdate(category._id, category, { new: true })
            return res.json(updateCategory)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController()