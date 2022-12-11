import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router()


router.get('/', UserController.findAll)
router.get('/category', UserController.findAllCategories)
router.get('/:id', UserController.find)

router.post('/pullWord', UserController.create)
router.post('/pullCategory', UserController.createCategory)

router.put('/', UserController.update)
router.put('/up', UserController.updateCategory)


export default router