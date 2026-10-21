# Sorteador de Números em JavaScript

Atividade 9 — projeto de estudo pessoal para praticar fundamentos de JavaScript com sorteios de números aleatórios, limite configurável e controle de repetições por rodada.

## Sobre o projeto

O programa realiza **50 sorteios** e exibe cada número no console. A variável `limiteEscolhido` define o maior número que pode ser sorteado e a quantidade de números diferentes de cada rodada.

Na configuração atual, `limiteEscolhido = 10`: os números vão de **1 a 10**, sem repetição dentro de cada rodada. Assim, os 50 sorteios correspondem a **cinco rodadas completas**.

## Regras de funcionamento

- O intervalo começa em **1** e termina em `limiteEscolhido`, incluindo os dois extremos.
- Os números sorteados na rodada são armazenados em `listaLimite`.
- Se um número já estiver na lista, o programa gera outro até encontrar um valor ainda não utilizado.
- Quando a lista contém todos os números do intervalo, ela é esvaziada automaticamente antes de registrar o primeiro resultado da próxima rodada.
- Os números podem aparecer novamente em rodadas diferentes, inclusive em sorteios consecutivos na passagem de uma rodada para outra.
- O contador continua até completar os **50 sorteios**, independentemente do reinício da lista.
- Cada resultado é exibido com `console.log(numero)`.

## Como configurar o limite

Altere o valor desta variável em `script.js`, usando um número inteiro positivo:

```javascript
let limiteEscolhido = 10;
```

Por exemplo, com `limiteEscolhido = 5`, cada rodada sorteia os números de **1 a 5** sem repetição. Ao terminar essa rodada, a lista é reiniciada para a próxima. Mantendo os 50 sorteios, serão **dez rodadas completas**.

O limite do intervalo e a quantidade total de sorteios são independentes. Se o total de sorteios não for múltiplo de `limiteEscolhido`, a execução termina com a última rodada incompleta.

## Tecnologias e conceitos praticados

- JavaScript
- Variáveis e limite configurável
- Funções
- Arrays
- Estruturas de repetição `while`
- Condicionais `if`
- `Math.random()` e `parseInt()`
- Métodos `includes()` e `push()`
- Controle de rodadas e reinício automático do histórico

## Como executar

### Com Node.js

É necessário ter o Node.js instalado.

1. Clone este repositório:

   ```bash
   git clone https://github.com/Nixzin/sorteador-numeros-js.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd sorteador-numeros-js
   ```

3. Execute o arquivo:

   ```bash
   node script.js
   ```

Os 50 números sorteados serão exibidos no terminal, um por linha. A sequência varia a cada execução.

### No navegador

Também é possível copiar o conteúdo de `script.js`, colá-lo no console do navegador e executá-lo.

## Estrutura do projeto

```text
sorteador-numeros-js/
├── README.md
└── script.js
```

## Objetivo de aprendizado

Consolidar lógica de programação, geração de números aleatórios, manipulação de arrays e controle de repetições. Esta versão amplia a atividade com um limite configurável e reinício automático das rodadas, preservando a lógica original do autor.
