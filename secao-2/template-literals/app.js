// Seção 2 Aula 11
  // Variáveis
    const nome = 'Gabriel';
    const idade =   16;
    const trampo = 'Web Developer';
    const cidade = 'Rio do Sul';
    let html;
  // Sem template Strings
    html = '<ul><li>Name: ' + nome + '</li><li>Idade: ' + idade + '</li><li>Trabalha com: ' + trampo + '</li><li>Mora em: ' + cidade + '</li></ul>';

  // Com template Strings

    html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Idade: ${idade}</li>
      <li>Trabalha: ${trampo}</li>
      <li>Cidade: ${cidade}</li>
      <li>${2*4}</li>
      <li>${idade > 17 ? 'Já tem carteira meu' : 'Novin'}</li>


    </ul>

    `;


    // Saída (Arquivo js precisa estar no body)
      document.body.innerHTML = html;
