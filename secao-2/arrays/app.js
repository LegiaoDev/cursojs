// Seção 2
  // Criando um array
  let val;
  const numeros = [3,12,45,78];
  const numeros2 = new Array(5,12,6,54);

  const frutas = ['maça', 'banana', 'laranja'];
  const mix = [22, 'Olá', true, undefined, null, {a:1, b:1}, new Date()];

  // Pegar comprimento do array
  val = numeros.length;

  // Ver se existe array
  val = Array.isArray(numeros);

  // Pegar um valor do array
  val = numeros[2];

  // Inserir dentro do array
  numeros[4] = 100;

  // Achar index de valor
  val = numeros.indexOf(100);

  // Mudar arrays
  numeros.push(250); // Insere valor ao final do array
  numeros.unshift(120); // Insere valor no inicio do array
  numeros.pop(); // Retira ultimo valor do array
  numeros.shift(); // Retirar primeiro valor do array
  numeros.splice(1,1); // Retirar valores específicos do array
  numeros.reverse(); // Inverter o array
  val = numeros.concat(numeros2); // Concatenar valores de array
  val = frutas.sort(); // Organiza os valores do array
  val = numeros.sort(); // Organiza os números pelo primeiro número
  val = numeros.sort(function(x, y){
    return x - y;
  }); // Organiza o array do menor para o maior
  val = numeros.sort(function(x, y) {
    return y - x;
  }); // Retorna os valores do maior para o menor

  function Menor50(num) {
    return num < 50;
  }
  val = numeros.find(Menor50); // Encontra o primeiro valor abaixo de 50

  function Maior50(num) {
    return num > 50;
  }
  val = numeros.find(Maior50); // Encontra o primeiro valor abaixo de 50





  // Saída

  console.log(val);
  console.log(numeros);
