import { Router } from "express";
import { createCategoryHandler, getCategoriesHandler } from "../controllers/category.controller.js";
const router = Router();
router.post('/create', createCategoryHandler);
router.get('/', getCategoriesHandler);
export default router;
