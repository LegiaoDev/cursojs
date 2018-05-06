// Seção 2
  const pessoa = {
    nome: 'Gabriel',
    idade: 15,
    hobbies: ['musica', 'esportes'], // Criar arrays dentro de objetos
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    },// Criar objeto dentro de objeto
    getBirthYear: function(){
      return 2018 - this.idade; // Pega valor do objeto e calcula
    } // Criar função dentro de objetos
  }
  let val;

  val = pessoa;

  // Pegar valor específico
  val = pessoa.nome; // Recomendado
  val = pessoa['nome'];

  val = pessoa.hobbies; // Retorna array do objeto
  val = pessoa.hobbies[1]; // Retorna valor específico do array dentro do objeto
  val = pessoa.endereco.cidade; // Retorna valor específoco de objeto dentro de objeto
  val = pessoa.getBirthYear();

  console.log(val);

  const pessoas = [
    {nome: 'Gabriel', idade: 18},
    {nome: 'Duda', idade: 17}
  ];

  for(let i = 0;i < pessoas.length; i++) {
    console.log(pessoas[i]);
  }
