const express = require('express');
const port = 8000;
const path = require('path')
const app = express();


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


var contactList = [
    {
        name:"Nishant",
        phone:"999999"
    },
    {
        name:"kalu",
        phone:"99999"
    },
    {
        name:"Manu",
        phone:"9999"

    }
    
]


app.get('/', function(req, res) {
    return res.render('index', {
        title:"My Contact List",
        contact_list: contactList
    })
})

app.get('/practice' , function(req, res) {
    return res.render('practice')
})

app.post('/create-contact', function(req, res) {
    return res.redirect('/practice')
})



app.listen(port, function(err) {
    if(err) {
        console.log(`There is an error ${err}`)
    }
    console.log(`The Server is running on Port ${port}`)
})