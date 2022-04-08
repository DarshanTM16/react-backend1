const express = require('express');
const cors = require('cors');
const postList = require('./postList.json');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(cors());


if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
}


console.log(`done`);

app.get("/blogdata", (req, res) => {
    console.log(req);
    res.send(postList);
})

app.get("/bollywoodata", (req, res) => {
    console.log(req);
    res.send(postList)
})

app.get("/techdata", (req, res) => {
    console.log(req);
    res.send(postList)
})

app.get("/hollydata", (req, res) => {
    res.send(postList)
})

app.get("/fitdata", (req, res) => {
    res.send(postList)
})

app.get("/traveldata", (req, res) => {
    res.send(postList)
})


const PORT = process.env.PORT || 5000;


app.listen(PORT);