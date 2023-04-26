const Pessoa = require("./Pessoa");

class Usuario extends Pessoa {
    id = 0;
    email = '';
    senha = '';

    constructor(id, email, senha, nome, sobreNome, documento, idade, sexo) {
        super(nome, sobreNome, documento, idade, sexo);

        this.id = id;
        this.email = email;
        this.senha = senha;
    }

    alterarSenha = (atual, nova, repeticao) => {
        if (atual !== this.senha) {
            return 'Senha atual incorreta!'
        }

        if (nova !== repeticao) {
            return 'As senhas digitadas não estão identicas!'
        }

        this.senha = nova;
        return 'Senha alterada com sucesso!'
    }
}

module.exports = Usuario;