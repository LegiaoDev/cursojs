/* Data Types no Javascript

  Tipos de Data Types

  - String: Sequencias de Caracteres
  - Number: Números
  - Boolean: Verdadeiro ou Falso
  - Null: Intenção de ser vazio
  - Undefined: Variável que não vai ter valor

*/

/* Tipos de Referencia / Objetos

- Arrays
- Objetos Literais
- Funções
- Dates
- Qualquer coisa que você pode salvar

*/

// Tipos Primitivos
  // String
    const nome = 'Gabriel'; // Tudo com '' ou "" vira uma string
  // Number
    const idade = 45;
  // Boolean
    const temFilhos = true;
  // Null
    const carro = null;
  // Undefined (Não pode ser constante)
    let teste;
  // Symbol
    const sym = Symbol();
  // Tudo com '' ou "" vira uma string

// Tipos de Referencia - Objetos
  // Array
    const hobbies = ['movies', 'music'];
  // Objeto Literal
    const endereco = {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  // Date
    const hoje = new Date(); // Constructor do tipo Date
console.log(typeof hoje);
