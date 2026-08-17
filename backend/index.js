import express from "express" // to access all the methods and functions in express
import dotenv from "dotenv" // We use dotenv to load environment variables from a .env file
import connectDb from "./config/db.js"
dotenv.config() // to access the environment variables in the .env file
const app= express() // to create express application
const port = process.env.PORT || 5000


app.listen(port,()=>{// this starts the server     
    connectDb()
    console.log("Server Started");
})