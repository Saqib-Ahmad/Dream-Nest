const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const lsitingRoutes = require('./routes/listing.js')
const bookingRoutes = require('./routes/booking.js')
const userRoutes = require('./routes/user.js')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//routes

app.use("/auth", authRoutes);
app.use('/properties', lsitingRoutes)
app.use('/bookings', bookingRoutes)
app.use('/users', userRoutes)

/*Mongoose setup*/

const PORT = process.env.port || 3001;

mongoose.connect(process.env.MONGO_URL,
    {dbName:"Dream_Nest"}).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port: ${PORT}`))
}).catch((err)=>console.log(`${err} did not connect!`)); 

