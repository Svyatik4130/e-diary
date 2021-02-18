const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
// const path = require('path');

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4040

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log("MONGODB CONNECTED")
})
app.use(express.static("front"))
// app.use("/users", require("./routes/userRouter"))
// app.use("/points", require("./routes/pointRouter"))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("front/build"))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '/front/build/index.html')) // important for 404!!!
    })
}

app.listen(PORT, () => console.log(`the server started at ${PORT}`))
