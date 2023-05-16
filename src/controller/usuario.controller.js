let usuarios = [
    { id: 1, nome: "Usuario 1", email: "usuario1@email.com", senha: "usuario123" },
    { id: 2, nome: "Usuario 2", email: "usuario2@email.com", senha: "usuario456" },
    { id: 3, nome: "Usuario 3", email: "usuario3@email.com", senha: "usuario789" }
];

//Pesquisa usuario pelo id
const find = (req, res) => {
    const id = req.params.id;
    const registro = usuarios.find((user) => user.id == id);

    if(registro == null) {
        return res.status(404).send({ message: "Registro não encontrado!" });
    }

    return res.send(registro);
}

//Lista todos os usuarios
const findAll = (req, res) => {
    return res.send(usuarios);
}

// Validação do body para create e update
const validaBody = (body) => {
    if(Object.keys(body).length === 0) {
        return { message: "Corpo da requisição não possui dados!" };
    }

    if(body.nome == null) {
        return { message: "Nome não foi informado!" };
    }

    if(body.email == null) {
        return { message: "E-mail não foi informado!" };
    }

    if(body.senha == null) {
        return { message: "Senha não foi informada!" };
    }

    return null;
}

// Create de usuario a partir do body
const create = (req, res) => {
    const body = req.body;
    const validarBody = validaBody(body);

    if(validarBody != null) {
        return res.status(400).send(validarBody);
    }

    usuarios.push(body);
    return res.status(201).send({ message: "Criação de registro efetuada com sucesso!", usuarios });
}

// Update de usuario a partir do body
const update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const validarBody = validaBody(body);

    if(validarBody != null) {
        return res.status(400).send(validarBody);
    }

    usuarios = usuarios.map((user) => {
        if(user.id == id) {
            return body;
        }
        return user;
    });

    return res.status(201).send({ message: "Atualização de registro efetuada com sucesso!", usuarios });
}

// Delete de usuario apartir do id
const remove = (req, res) => {
    const id = req.params.id;

    usuarios = usuarios.filter((user) => user.id != id);

    return res.status(201).send({ message: "Registro removido com sucesso!", usuarios });
} 

module.exports = {
    find,
    findAll,
    create,
    update,
    remove
}