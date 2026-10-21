let numero;

let listaLimite = [];

let contador = 0;

let limiteEscolhido = 10;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * limiteEscolhido) + 1;
}

function retornarNumero() {
    numero = gerarNumeroAleatorio();

    if (listaLimite.length == limiteEscolhido) {
        listaLimite = [];
    }

    while (listaLimite.includes(numero)) {
        numero = gerarNumeroAleatorio();
    }

    listaLimite.push(numero);
    console.log(numero);
}

while (contador != 50) {
    retornarNumero();
    contador++;
}
