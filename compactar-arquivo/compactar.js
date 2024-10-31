import fs from 'fs';
import archiver from 'archiver';

function compactarArquivo(diretorio, arquivoZip) {
    const saida = fs.createWriteStream(arquivoZip);

    // Regras da compactação
    const arquivo = archiver('zip', {
        zlib: {
            level: 1    // Nível compactação
        }
    });

    saida.on('close', () => {
        console.log(`Arquivo compactado: ${arquivo.pointer} bytes`);
    });

    arquivo.on('error', (erro) => {
        throw erro;
    });

    arquivo.pipe(saida);
    arquivo.directory(diretorio, false); // Compacta o diretório sem incluir a estrutura da pasta principal
    arquivo.finalize();
}

const nomeDiretorio = 'pasta1';
const arquivoZip = `${nomeDiretorio}.zip`;

compactarArquivo(nomeDiretorio, arquivoZip);
