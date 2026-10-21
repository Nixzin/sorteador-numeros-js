# Sorteador de Números em JavaScript

Projeto de estudo desenvolvido para praticar fundamentos de JavaScript por meio de um sorteador de números aleatórios sem repetição dentro de cada ciclo.

## Sobre o projeto

O programa gera **15 números** no intervalo de **1 a 10** e exibe cada resultado no console.

Durante um ciclo, os números sorteados são armazenados em uma lista para evitar repetições. Quando os dez números possíveis já foram utilizados, a lista é reiniciada e um novo ciclo de sorteios começa.

## Regras de funcionamento

- Os números gerados estão entre **1 e 10**.
- Um número não se repete enquanto o ciclo atual ainda possui opções disponíveis.
- Ao completar os dez números possíveis, o histórico do ciclo é limpo.
- O programa realiza 15 sorteios.
- Cada número sorteado é exibido no console.

## Tecnologias e conceitos praticados

- JavaScript
- Variáveis
- Funções
- Arrays
- Estruturas de repetição `while`
- Condicionais `if`
- `Math.random()`
- Métodos `includes()` e `push()`

## Como executar

### Com Node.js

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

Os números sorteados serão exibidos no terminal.

### No navegador

Também é possível copiar o conteúdo de `script.js`, colá-lo no console do navegador e executá-lo.

## Estrutura do projeto

```text
sorteador-numeros-js/
├── README.md
└── script.js
```

## Objetivo de aprendizado

Esta atividade foi criada para consolidar o uso de lógica de programação, geração de números aleatórios, controle de repetições e manipulação de arrays em JavaScript.
