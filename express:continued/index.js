const express = require('express');
const port = 8000;
const path = require('path')
const app = express();




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded())


// middleware 1 
app.use(function(req, res, next) {
    console.log("The middleware 1 have been called!!!!")
    next()
});
//middleWare 2
app.use(function(req,res,next) {
    console.log("The middleware 2 have been called!!")
    next()
})


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
  
   contactList.push({
       name: req.body.name,
       phone: req.body.phone
   });
   return res.redirect('/')

//   console.log(req.body)
//   console.log(req.body.name)
//   console.log(req.body.phone);  
     //open chrome   resolve??
});

app.listen(port, function(err) {
    if(err) {
        console.log(`There is an error ${err}`)
    }
    console.log(`The Server is running on Port ${port}`)
})