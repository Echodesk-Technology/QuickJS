const express = require("express");
const path = require("path");

const app = express();

app.use('/public', express.static(path.resolve(__dirname, "frontend", "public")));

app.get('/*', (req,res) => {
    res.sendFile(path.resolve("frontend", "index.html"))
});

app.listen(process.env.PORT || 8060, () => console.log("Server started"))