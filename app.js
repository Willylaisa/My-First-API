const express = require("express")
const morgan = require("morgan")
const app = express()
const postRoutes = require("./routes/post")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const expressValidator = require("express-validator")
const bodyParser = require("body-parser")

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true})
    .then(() => console.log("DB connected"))

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
})

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRoutes)

const port = process.env.PORT || 8080
app.listen(port)
