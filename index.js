import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "./api/routes/auth.js"
import futsalsRoutes from "./api/routes/futsals.js"
import usersRoutes from "./api/routes/users.js"
import roomsRoutes from "./api/routes/rooms.js"

const app = express()
dotenv.config()

const connect = async () => {


    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")

    } catch (error) {
        throw error
    }

};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoBd disconnected!")
})

//middlewares

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/futsals", futsalsRoutes);
app.use("/api/rooms", roomsRoutes);







app.listen(8800, () => {
    connect()
    console.log("connected to backend.")
})