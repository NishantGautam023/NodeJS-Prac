const express = require('express');
const port = 8000;
const app = express()
const path = require('path')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',function(req, res) {
    return res.render('index', {title: "My contact List"})
})

app.get('/practice', function(req,res) {
    return res.render('practice', 
    {title: "MY Practice Page"}
    )
});










app.listen(port,function(err) {
    if(err) {
        console.log(`There is an error: ${err}`)
    }
    console.log(`The Server is running on port ${port}`)
})