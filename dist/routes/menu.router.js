import { Router } from "express";
import { createMenuHandler, getMenuByCategoryHandler } from "../controllers/menu.controller";
const router = Router();
router.post('/create', createMenuHandler);
router.get('/:categoryId', getMenuByCategoryHandler);
export default router;
