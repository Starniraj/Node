const http = require("http");

const server= http.createServer((req,res)=>{
    res.write("First Server")
    res.end();
})

server.listen(7070,()=>{
    console.log("server running")
});
