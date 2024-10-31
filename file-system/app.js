// Importa o Módulo FS (file system)
import fs from 'fs';

const nomeArquivo = 'arquivo.txt';

// Cria um arquivo e adiciona ou substitui o conteúdo
function criarArquivo() {
    const conteudo = "Primeiro conteúdo...";

    fs.writeFile(nomeArquivo, conteudo, (erro) => {
        if (erro) {
            console.log('Erro ao criar o arquivo: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log("Arquivo criado!");
    });
}

// Abre um arquivo e mostra o conteúdo
function lerArquivo() {

    fs.readFile(nomeArquivo, 'utf8', (erro, dados) => {
        if (erro) {
            console.log('Erro ao ler o arquivo: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log("Conteúdo do arquivo: ", dados);
    });
}

// Adiciona dados ao final de um arquivo existente
function adicionarConteudo() {
    const novoConteudo = "\n... adicionado pelo Node.js";

    fs.appendFile(nomeArquivo, novoConteudo, (erro) => {
        if (erro) {
            console.log('Erro ao adicionar conteúdo: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log("Conteúdo adicionado");
    });
}

// Remove um arquivo
function excluirArquivo() {
    fs.unlink(nomeArquivo, (erro) => {
        if (erro) {
            console.log('Erro ao excluir o arquivo: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log("Arquivo apagado");
    });
}

// Cria um diretório (pasta)
function criarDiretorio(nomeDiretorio) {

    fs.mkdir(nomeDiretorio, { recursive: true }, erro => {
        if (erro) {
            console.log('Erro ao criar o diretório: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log(`Diretótio '${nomeDiretorio}' criado com sucesso!`);
    });
}

// Exclui um diretório (pasta)
function excluirDiretorio(nomeDiretorio) {

    fs.rm(nomeDiretorio, { recursive: true }, erro => {
        if (erro) {
            console.log('Erro ao excluir o diretório: ', erro);
            return; // Early return (retorno antecipado)
        }

        console.log(`Diretótio '${nomeDiretorio}' apagado`);
    });
}



// Cria um arquivo grande (com 12 MB)
const nomeArquivoGrande = 'arquivo_grande.txt';

function criarArquivoGrande() {
    const linhas = 1000000; // Cria um arquivo com 12 MB

    // Cria o arquivo
    const stream = fs.createWriteStream(nomeArquivoGrande);
    
    // Percorre o arquivo criando as linhas
    for (let i = 1; i < linhas; i++) {
        stream.write(`Linha ${i}\n`);
    }

    stream.end(() => {
        console.log(`${linhas} linhas escritas no arquivo ${nomeArquivoGrande}`);
    });
}

// Lê o arquivo de forma Assíncrona (async)
function leituraAssincrona() {
    console.log('\n1. Iniciando leitura do arquivo assíncrono...');

    fs.readFile(nomeArquivoGrande, 'utf8', (erro, dados) => {
        if (erro) {
            console.error(`\nErro ao ler o arquivo: ${erro}`);
            return;
        }

        // Mostra os primeiros 1.000 caracteres
        console.log(`\n2. Conteúdo do arquivo (assíncrono):\n${dados.slice(0, 1001)}`);
    });

    console.log('\n3. Continua executando outras operações...');
}

// Lê o arquivo de forma Síncrona (sync)
function leituraSincrona() {
    console.log('\n1. Iniciando leitura do arquivo síncrono...');

    const dados = fs.readFileSync(nomeArquivoGrande, 'utf8');

    // Mostra os primeiros 1.000 caracteres
    console.log(`\n2. Conteúdo do arquivo (síncrono):\n${dados.slice(0, 1001)}`);

    console.log('\n3. Continua executando outras operações...');
}



// ===== Chamada das Functions ===== //
// criarArquivo();
// adicionarConteudo();
// lerArquivo();
// excluirArquivo();
// criarDiretorio('newPast');
// excluirDiretorio('newPast');
// criarArquivoGrande();
// leituraAssincrona();
leituraSincrona();
