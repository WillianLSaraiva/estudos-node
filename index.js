import express from "express";

const app = express();
const PORT = 8081;

app.get("/", (req, res)=>{
    res.send("<h1>Seja bem-vindo a o meu App!!</h1>");
});

app.get("/ola/:nome/:idade", (req, res)=>{
    res.send(`<h1>Ola ${req.params.nome}.</h1><h2>Sua idade e ${req.params.idade}</h2>.`);
});

app.listen(PORT, ()=>{
    console.log(`Sevidor rodando em http://localhost:${PORT}`);
});