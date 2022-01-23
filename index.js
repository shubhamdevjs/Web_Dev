require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const OurAPP = express();
const Category = require("./Routes/category");

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
    })
    .then(() => console.log("connection extablished!"))
    .catch((err) => {
        console.log(err);
    });

OurAPP.use(express.json());
OurAPP.use("/", require(path.join(__dirname, "/Routes/category")))
// OurAPP.use("/Category", Category);

OurAPP.get("/", (request, response) => {
    response.json({ message: "Server is working!!!!!!" });
});

OurAPP.listen(4000, () => console.log("Server is running"));