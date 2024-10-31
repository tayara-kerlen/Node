import os from 'os';

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
