const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: String,
    TotalSales: Number,
    TargetSales: Number,
    percentage:Number,
    Track: String,
    
})

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;