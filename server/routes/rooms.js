const express = require("express");
const router = express.Router();
const Room = require("../models/Room.js")

router.post("/add-room", (req, res) => {

    const { name, capacity, price, status } = req.body;

    let newRoom = new Room ({
        name,
        capacity,
        price,
        status
    })

    return newRoom.save()
    .then(res => res.status(201).send({message: "Room added successfully"}))
    .catch(err => res.status(500).send(err))

})

module.exports = router;