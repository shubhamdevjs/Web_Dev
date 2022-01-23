const mongoose = require("mongoose");

const levelOneSchema = mongoose.Schema({
    level:Number,
    name: String,
    TotalSales: Number,
    TargetSales: Number,
    percentage:Number,
    Track: String,
    
})

const levelOneModel = mongoose.model("LevelOne", levelOneSchema);

module.exports = levelOneModel;