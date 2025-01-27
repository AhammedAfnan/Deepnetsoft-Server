import {Router} from "express"
import {createMenuHandler, getMenuByCategoryHandler} from "../controllers/menu.controller.js"

const router = Router()

router.post('/create', createMenuHandler as any)

router.get('/:categoryId', getMenuByCategoryHandler as any)

export default router