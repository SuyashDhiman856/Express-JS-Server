const express = require("express");
const path = require('path');
const axios = require('axios');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use("/images", express.static(path.join(__dirname, "/static/images")));
app.use('/', require(path.join(__dirname, "../router/router.js")));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.listen(port, () => {
    console.log(`Tour Booking App running on http://localhost:${port}`);
});