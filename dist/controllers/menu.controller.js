import Menu from "../models/menu.model";
export async function createMenuHandler(req, res) {
    const menus = req.body;
    try {
        if (menus && !Array.isArray(menus)) {
            return res
                .status(400)
                .json({ error: { message: "Menu must be a array." } });
        }
        const newMenus = await Promise.all(
        // @ts-ignore
        menus.map(async (menu) => {
            const newMenu = await Menu.create({ ...menu });
            return newMenu;
        }));
        return res
            .status(201)
            .json({ payload: newMenus });
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: { message: "Internal server error." } });
    }
}
export async function getMenuByCategoryHandler(req, res) {
    const { categoryId } = req.params;
    try {
        const menus = await Menu.find({ category: categoryId }).populate("category");
        return res.status(200).json({ payload: menus });
    }
    catch (err) {
        return res
            .status(500)
            .json({ error: { message: "Internal server error." } });
    }
}
