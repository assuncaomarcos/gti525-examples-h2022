const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    veg: {
        type: Boolean,
        required: true
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    how_to_make: {
        type: String,
        required: true
    }
});

const Dish = module.exports = mongoose.model('dish', dishSchema);