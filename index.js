//import json library
const jsonServer = require('json-server')

//create the server
const mediaPlayerServer = jsonServer.create()

//middleware to parse the json format
const middleware = jsonServer.defaults()

//setup the path to store data
const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//port for server
const PORT = 4000 || process.env.PORT

//to listen the request from the frontend for resolving that request
  mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running succesfully at prot number ${PORT}`);
  })