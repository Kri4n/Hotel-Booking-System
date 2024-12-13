const express = require("express");
const router = express.Router();
const Room = require("../models/Room.js")

router.post("", (req, res) => {

    const { name, capacity, price, status } = req.body;

    let newRoom = new Room ({
        name,
        capacity,
        price,
        status
    })

    return newRoom.save()
    .then(result => res.status(201).send({message: "Room added successfully"}))
    .catch(err => res.status(500).send(err))

})

router.get("", (req, res) => {

    return Room.find()

    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err))

})

router.put("/:id", (req, res) => {

    const { name, capacity, price, status } = req.body;

    let updatedRoom = ({
        name: name,
        capacity: capacity,
        price: price,
        status: status
    })

    return Room.findByIdAndUpdate(req.params.id, updatedRoom)
    .then(result => res.status(201).send({message: "Room Successfully Updated", room: result}))
    .catch(err => res.status(500).send(err));

})

router.delete("/:id", (req, res) => {

    return Room.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({message: "Successfully Deleted", deleted: result}))
    .catch(err => res.status(500).send(err));

})

module.exports = router;