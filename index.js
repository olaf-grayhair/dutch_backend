import express from 'express'
import mongoose from 'mongoose'
import router from './routers/router.js'
import cors from 'cors'

const PORT = process.env.PORT || 3003
const URL = 'mongodb+srv://coldworld777:spellcraft1997@cluster0.hiayscb.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

// app.post('/pull', )

async function startApp() {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, () => console.log('started on ', PORT))

    } catch (error) {
        console.log(error);
    }
}


startApp()