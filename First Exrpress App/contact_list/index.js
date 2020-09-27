const express = require('express');
const port = 8000;
const app = express();



app.get('/', function(req, res) {
    res.send("Yup the server is running very succesfully !!!")
    console.log(req);
})


app.listen(port, function(err) {
    if(err) {
        console.log( `There is an error ${err}`)

    }
    console.log(`The Sever is running on Port ${port}`)
})