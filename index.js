const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors())
require("dotenv").config()
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const urlshortener = require("./routes/urlshortener")

app.use(urlshortener)

app.listen(process.env.PORT , ()=>{
    console.log(`Running on Port ${process.env.PORT}`)
})