const express = require('express');
const http = require('http');

const workerjob = require('./src/node-parent-thread-rxjs');

const app = express();


app.get('/',async (req,res)=>{
   try {
     let worker = await workerjob()
     res.status(200).send('worker success');
   }catch(err){
     console.log(err);
   }
     res.end()
});


const server =  http.createServer(app);

let PORT = 3000;
server.listen(PORT,()=>{
	console.log(`Running port on ${PORT}`)
})



