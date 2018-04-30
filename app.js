// Seção 2 Aula 6

  // var, let, const


    // VAR

      // Da valor a uma variável
        var name = 'John Doe';
        console.log(name);

      // Depois de declarar a variável, pode trocar o seu valor
        name = 'Steve Smith';
        console.log(name);

      // Iniciando variável

        // Variáveis sem valor declarado retornam com valor indefinido
          var greeting;
          console.log(greeting);

        // Pode adicionar um valor para ela depois do mesmo jeito
          greeting = 'Hello';
          console.log(greeting);

      // O que pode ser incluido nas variáveis? Letras, numeros, _, $
      // Não pode iniciar com numeros!!!!!!!!!!

      // Para muitas palavras
        var primeiroNome = 'Gabriel'; // Segundo nome maiusculo
        var primeiro_nome = 'Gabriel'; // Com underline

        var PrimeiroNome = 'Gabriel'; // Pascal Case

        var primeironome = 'Gabriel'; // Tudo minusculo

    // LET

      // Da valor a uma variável
        let name = 'John Doe';
        console.log(name);

      // Depois de declarar a variável, pode trocar o seu valor
        name = 'Steve Smith';
        console.log(name);

    // CONST

      // Declarando valor de variável
        const name = 'Gabriel';
        console.log(name);

        // Constante não podem receber novo valor;

        // name = 'Duda'; Vai dar erro
    // Criando objeto const
      // Você pode inserir diversos dados
        const person = {
          name : 'Gabriel',
          idade : 30
        }
        // Pode ser trocado  o valor dos dados da constante, mas não o valor da variável.
        person.name = 'Duda';
        console.log(person);
