// express js 
// install ✔️
// express js boilerplate codecode✔️
      // go to npm
      // search express
      // copy the code
// express js ejs setup✔️
     //install ejs 
     //set view engine 
     //create views folder
     //create ejs files
     //render ejs files inside route
//express static files setup
//arhitecture of public folder

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static("./public"))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
