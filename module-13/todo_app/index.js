 const http = require("http")

 const server = http.createServer((req, res)=>{
    console.log(req.url, req.method)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my ToDo App")
 })

 server.listen(5000, "0.0.0.0", ()=>{
   console.log("Server running at: ", "http://0.0.0.0:5000")
 })

