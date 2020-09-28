const express = require('express');
const port = 8000;
const path = require('path')
const app = express();


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    return res.render('index')
})



app.listen(port, function(err) {
    if(err) {
        console.log(`There is an error ${err}`)
    }
    console.log(`The Server is running on Port ${port}`)
})