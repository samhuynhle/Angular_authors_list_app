const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.json());

require('./server/routes.js')(app);

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});

app.use(express.static( __dirname + '/public/dist/public'));