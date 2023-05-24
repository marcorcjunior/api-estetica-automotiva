const mongoose = require("mongoose");

const service = require("../service/auth.service");

//Pesquisa usuario pelo email e senha e gera token de autenticação
const auth = (req, res) => {
    const { email, senha } = req.body;

    service.loginService(email)
        .then((usuario) => {
            if(!usuario) {
                return res.status(404).send({ message: "Usuario não encontrado! Tente novamente!"});
            }

            if(usuario.senha != senha) {
                return res.status(404).send({ message: "Usuario não encontrado! Tente novamente!"});
            }

            const token = service.gerarTokenJWT(usuario);

            return res.status(200).send({ auth: true, token });
        })
        .catch((err) => {
            return res.status(500).send({ message: err.message });
        });
}

const validaToken = (req, res) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).send({ message: "Token de acesso não informado!"});
    }

    const parts = authorization.split(" ");
    if(parts.length !== 2) {
        return res.status(401).send({ message: "Token de acesso invalido!"});
    }

    const [scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: "Token de acesso malformatado!"});
    }

    const { user } = service.validarTokenJWT(token)

    return res.status(200).send({ user, token });

}

module.exports = {
    auth,
    validaToken
}