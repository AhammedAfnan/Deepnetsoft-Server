import Category from "../models/category.model";
export async function createCategoryHandler(req, res) {
    const { name, description } = req.body;
    try {
        const exist = await Category.findOne({ name });
        if (exist) {
            return res.status(409).json({ error: { message: 'Category already exist.' } });
        }
        const category = await Category.create({ name, description });
        return res.status(201).json({ payload: category });
    }
    catch (err) {
        return res.status(500).json({ error: { message: 'Internal server error.' } });
    }
}
export async function getCategoriesHandler(req, res) {
    try {
        const categories = await Category.find({});
        return res.status(201).json({ payload: categories });
    }
    catch (err) {
        return res.status(500).json({ error: { message: 'Internal server error.' } });
    }
}
