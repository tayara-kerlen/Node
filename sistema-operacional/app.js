import os from 'os';
import path, { basename, dirname } from 'path';

// Informações sobre o Sistema Operacional (SO)
console.log('Arquitetura do Sistema: ', os.arch());
console.log('Plataforma do Sistema: ', os.platform());
console.log('Processadores: ', os.cpus());
console.log('Número de CPUs: ', os.cpus().length);
console.log('Memória Total (bytes): ', converterBytes(os.totalmem()));
console.log('Memória Livre (bytes): ', converterBytes(os.freemem()));

// Informações sobre a rede
console.log('Interfaces de Rede: ', os.networkInterfaces());

function converterBytes(memoria) {
    //               em KB   em MB  em GB
    return (memoria / 1024 / 1024 / 1024).toFixed(1) + ' GB';
}



// ===== Path ===== //

// Manipulação de caminhos
const dirName = path.dirname('/path/to/file.txt');
const baseName = path.basename('/path/to/file.txt');
const extName = path.extname('/path/to/file.txt');

const joinPath = path.join('/path', 'to', 'file.txt');
const resolvePath = path.resolve('file.txt');

// Mostra os valores
console.log('Diretótio: ', dirName);
console.log('Nome do arquivo: ', baseName);
console.log('Extensão do arquivo: ', extName);
console.log('Caminho Combinado: ', joinPath);
console.log('Caminho Absoluto: ', resolvePath);
