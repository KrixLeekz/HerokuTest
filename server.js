const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("hello")
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})