const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const roomRoutes = require("./routes/rooms.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@wdc028-course-booking.jxleq.mongodb.net/Hotel-Booking-System?retryWrites=true&w=majority")
mongoose.connection.once('open', () => console.log('Now Connected to MongoDB'))

app.use("/rooms", roomRoutes);


app.listen(3000, () => {
    console.log("API is now online on port 3000")
});

module.exports = { app, mongoose };