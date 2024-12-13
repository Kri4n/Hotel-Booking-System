const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    capacity: {
        type: Number
    },
    price: {
        type: Number
    },
    status: {
        type: String,
        default: 'Available'
    }
})

module.exports = mongoose.model('Room', roomSchema);