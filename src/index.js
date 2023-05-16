const express = require("express");

const port = 3000;
const app = express();

const usuario =  require("./router/usuario.router");

app.use(express.json());

app.use("/usuarios", usuario);

app.listen(port, () => {
    console.log(`Servicor rodando em http://localhost:${port}`)
});