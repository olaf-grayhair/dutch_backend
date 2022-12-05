import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router()

router.post('/pull', UserController.create)
router.get('/:id', UserController.find)
router.get('/', UserController.findAll)
router.put('/', UserController.update)


export default router