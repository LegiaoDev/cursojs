// Seção 2 Aula 7
  let val; // Não declaramos valor, por isso usamos let

  // Number para String
    val = String(5);
    val = String(4+4);

  // Boolean para String
    val = String(true);
  // Date para String
    val = String(new Date());
  // Array para String
    val = String([1,2,3,4]);

  // toString()
    // Number
      val = (5).toString();
    // Boolean
      val = (true).toString();
    // Date
      val = (new Date()).toString();
    // Array
      val = (['1,2,3,4']).toString();

    // String para Number
      val = Number('5');

    // Boolean para Number
      val = Number(true);
      val = Number(false);

    // Null para Number
      val = Number(null);

    // Not a Number
      val = Number('e ai');
      val = Number([1,2,3]);

      val = parseInt('100'); // Adiciona apenas o valor inteiro

      val = parseFloat('100.30');// Retorna valores decimais

    // Saída

      console.log(val);
      console.log(typeof val);
      // console.log(val.length);
      console.log(val.toFixed(1));


    // Type coorsion
      const val1 = String(5); // Valor convertido para String por código
      const val2 = 6; // JS converte automaticamente val2 para string para ter o mesmo resultado
      const soma = val1 + val2;
      console.log(soma);
      console.log(typeof soma);
