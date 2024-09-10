
//adicionando o document.getElementById para importar dados do cadFilial.html
document.getElementById('formularioFilial').addEventListener('submit', function(event){ 
    event.preventDefault();

    
    //Aqui eu declarei as variáveis que vai receber lá do formulário 'formularioFilial' através do document.getElementById

    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let responsavel = document.getElementById('responsavel').value;

    //Criei uma variavel filiais para armazenar leitura de dados em local storage através do JSON 'setItem' que vem do cadastro de filial
    let filiais = JSON.parse(localStorage.getItem('filiais')) || [];
    
    if (filiais.some(filial => filial.codigo === codigo)) {
        alert('Código já cadastrado!');
        return;
    }
    //Cadastrando nova filial através do push para armazenar os dados do array em filiais. Após armazenar ele gravará os dados em local storage através do atributo setItem.
    filiais.push({ codigo, nome, endereco, responsavel });
    localStorage.setItem('filiais', JSON.stringify(filiais));

        //notificando o cadastro com sucesso,resetando o formulário e transferindo para a entrega.
      
        alert('Filial cadastrada com sucesso!');
        document.getElementById('formularioFilial').reset();
        window.location.href = 'entrega.html';

});