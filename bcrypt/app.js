// Criptografa (hash) a senha com BCrypt

// Criptografia pode ser revertida (descriptografar)

//Hash não pode reverter, é uma via de mão única.
// - A senha informada pelo usuário é convertida em hash utilizando a mesma técnica do cadastro e comparada com a senha que já armazenada no Banco de Dados.

import bcrypt from 'bcrypt';

const saltRounds = 10; //   Número de "camadas" de segurança
const senhaInformada = "12345";

bcrypt.hash(senhaInformada, saltRounds, (erro, hashGerado) => {
    // Se der erro, mostra uma mensagem
    if (erro) {
        throw erro;
    }

    console.log('Hash Bcrypt: ', hashGerado);

    // Verifica/compara a senha
    bcrypt.compare(senhaInformada, hashGerado, (erro, resultado) => {
        //Se der erro, mostra uma mensagem
        if (erro) {
            throw erro;
        }

        console.log("Senha correta: ", resultado);   
    });
});