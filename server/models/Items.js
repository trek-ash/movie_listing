const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type: String,
    },
    description: {
        type: String
    }
})

module.exports = Items = mongoose.model("items", ItemSchema)