const {createServer} = require("node:http");
const localhost = '127.0.0.1';
const port = 3000;

const server = createServer((req,res)=>{
    res.statuscode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end("Hello node js");
});
server.listen(port,localhost,()=>{
    console.log(`runing on:${localhost}:${port}`);
});
