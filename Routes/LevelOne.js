const Router = require("express").Router();

const levelOneModel = require("../Schema/levelOne");

Router.post("/levelOne/new", async (req, res) => {  
    try {
        const { newlevelOne } = req.body;

        await levelOneModel.create(newlevelOne);
        return res.json({ message: "Category added to the database" });
    } catch (error) {
        return res.json({ error: error.message });
    }
});

Router.get("/Category/:level", async (req, res) => {
    const getSpecificLevel = await levelOneModel.findOne({
        level: req.params.level,
    });

    if (!getSpecificLevel) {
        return res.json({
            error: `No level found for the  ${req.params.level}`,
        });
    }

    return res.json({ level: getSpecificLevel });
});