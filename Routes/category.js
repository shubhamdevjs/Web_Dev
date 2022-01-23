const Router = require("express").Router();

const CategoryModel = require("../Schema/category");

Router.post("/Category/new", async (req, res) => {  
    try {
        const { newCategory } = req.body;

        await CategoryModel.create(newCategory);
        return res.json({ message: "Category added to the database" });
    } catch (error) {
        return res.json({ error: error.message });
    }
});
Router.get("/Category", async (req, res) => {
    const Category = await CategoryModel.find();
     return res.json(Category);
});

Router.post("/Category/newSub", async (req, res) => {  
    try {
        const { newCategory } = req.body;

        await CategoryModel.create(newCategory);
        return res.json({ message: "SubCategory-Category added to the database" });
    } catch (error) {
        return res.json({ error: error.message });
    }
});





module.exports = Router;