let numero;

let listaLimite = [];

let contador = 0;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
}

function retornarNumero() {
    numero = gerarNumeroAleatorio();

    if (listaLimite.length == 10) {
        listaLimite = [];
    }

    while (listaLimite.includes(numero)) {
        numero = gerarNumeroAleatorio();
    }

    listaLimite.push(numero);
    console.log(numero);
}

while (contador != 15) {
    retornarNumero();
    contador++;
}
