import http from "http";

const hostname = "127.0.0.1";
const PORT = 8081;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text-plain"});
    res.end("Hello World!!");
});

server.listen(PORT, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${PORT}/`);
});