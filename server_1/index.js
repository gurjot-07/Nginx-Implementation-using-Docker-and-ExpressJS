const express = require("express");

const app = express();

const PORT = 7777;
const HOST = "0.0.0.0";

app.get("/",(req,res) =>{
    res.send("You have reached the endpoint from Server 1");
} );

app.listen(PORT, HOST =>{
    console.log("Listening on Port 7777");
});