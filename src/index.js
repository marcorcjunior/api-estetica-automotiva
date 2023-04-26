const Usuario = require("./Entity/usuario");

for (let i = 1; i <= 10; i++) {

    const usuario = new Usuario(
        i,
        'admin@email.com',
        `${i}${i}${i}${i}${i}`,
        `Nome usuario ${i}`,
        `Sobrenome usuario ${i}`,
        `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
        26,
        'Masculino'
    );

    console.log(usuario)

    console.log('------------------------------------')

    console.log(usuario.alterarSenha(usuario.senha, '123', '123'))

    console.log('------------------------------------')

    console.log(usuario)

}
