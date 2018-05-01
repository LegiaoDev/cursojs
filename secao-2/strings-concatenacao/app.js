// Seção 2 Aula 10
  // Variáveis
  const primeiroNome = 'Gabriel';
  const sobreNome = 'Antonio';
  const idades = 19;
  const string = 'Olá, menu nome é Gabriel';

  let val;

  val = primeiroNome + sobreNome;

  // Concatenação
  val = primeiroNome + ' ' + sobreNome;

  // Adicionar
  val = 'Brad ';
  val += 'Traversy';

  val = 'Olá, meu nome é ' + primeiroNome + ' e eu tenho ' + idades + ' anos';

  // Escaping
  val = 'That\'s awesome';

  // Comprimento
  val = primeiroNome.length;

  // Concat
  val = primeiroNome.concat(' ', sobreNome);

  // Trocar Tipo
  val = primeiroNome.toUpperCase();
  val += sobreNome.toLowerCase();

  val = primeiroNome[0];

  // indexOf()
  val = primeiroNome.indexOf('a');
  val = sobreNome.lastIndexOf('l');

  // charAt()
  val = primeiroNome.charAt(2);

  // Pegar último caractere
  val = primeiroNome.charAt(primeiroNome.length - 1);

  // Substrings
  val = primeiroNome.substring(0,4);

  // Fatia
  val = primeiroNome.slice(0, -4);

  // Dividir (split())
  val = string.split(' ');

  // replace()
  val = string.replace('Gabriel', 'Toninho');

  // includes()
  val = string.includes('Gabriel');

  // Saída
  console.log(val);
