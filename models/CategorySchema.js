const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('category', CategorySchema);