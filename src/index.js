const Usuario = require("./Entity/usuario");

const usuarioJson = '{"nome":"Usuario","sobreNome":"Teste","documento":"00000012345","idade":"42","sexo":"Masculino","id":"25","email":"usuario@email.com","senha":"senha123"}';

const usuarioFromJson = JSON.parse(usuarioJson);

const novoUsuario = new Usuario(
    usuarioFromJson.id,
    usuarioFromJson.email,
    usuarioFromJson.senha,
    usuarioFromJson.nome,
    usuarioFromJson.sobreNome,
    usuarioFromJson.documento,
    usuarioFromJson.idade,
    usuarioFromJson.sexo
)

console.log('Objeto Entity');
console.log(novoUsuario);

console.log('Comparação');
console.log(JSON.stringify(novoUsuario) == usuarioJson);

console.log('Usuario Json');
console.log(usuarioJson);

console.log('Usuario Objeto Entity string');
console.log(JSON.stringify(novoUsuario));



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
