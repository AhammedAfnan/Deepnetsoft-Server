import {Router} from "express"
import {createCategoryHandler, getCategoriesHandler} from "../controllers/category.controller.js"

const router = Router()

router.post('/create', createCategoryHandler as any)

router.get('/', getCategoriesHandler as any)

export default router   