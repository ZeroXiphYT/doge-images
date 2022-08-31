const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const app = express();
app.options('/image', cors(corsOptions));


var corsOptions = {
    origin: "*"
};

app.get("/image", cors(corsOptions), (req, res) => {
    const images = ["./images/doge1.jpeg", "./images/doge2.jpeg", "./images/doge3.jpeg"];


    res.json({
        imageUrl: _.sample(images)
    });
});

app.listen(3000);
