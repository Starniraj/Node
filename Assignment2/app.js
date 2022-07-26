const express = require('express')
 const app = express()
 app.get('/api/main', function(req,res){
    res.send('Hi I am Niraj Singh')
    // res.send('<h1>Niraj Singh</h1>')
    // res.send({ 
    //     name : 'Niraj',
    //     profession : 'Developer'

    // }) 

    // can send only one send req
    // no need to use res.end() 
    //res.send  = res.write() + res.end()

 })
 app.listen(8080, function(){
    console.log('Hi Application is running')
 })