class usuario {
    id = 0;
    email = '';
    senha = '';

    constructor(id, email, senha ) {
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

module.exports = usuario;