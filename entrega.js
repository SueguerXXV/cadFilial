
//declarando o DOMContentLoaded para buscar filial existente em local storage da variável filiais para alimentar a function.

    document.addEventListener('DOMContentLoaded', function() {
    // Preenchendo o select de filiais

    let filiais = JSON.parse(localStorage.getItem('filiais')) || [];
    let filialDestinoSelect = document.getElementById('filialDestino'); // variavel filialDestinoSelect alimentada pelo elemento 'option' para poder servir o form select filial.
    let responsavelFilial = document.getElementById('responsavelFilial');

    filiais.forEach(filial => {
        let option = document.createElement('option');
        option.value = filial.codigo;
        option.textContent = filial.responsavel;
        responsavelFilial.appendChild(option);
    })
    //aqui foi criado uma arrow function para criar um elemento 'option' que vai receber de filiais > filial os dados codigo e nome para alimentar a variável 'filialDestinoSelect' através do appendChild.
    filiais.forEach(filial => {
        let option = document.createElement('option');
        option.value = filial.codigo;
        option.textContent = filial.nome;
        filialDestinoSelect.appendChild(option); //Utilizado o appendChild para devolver filial.codigo e filial.nome a filialDestinoSelect, esses dados serão carregados pelo select id="filialDestino" do form entrega.
    });

    // vamos pegar o cepOrigem do form e criar a função para integração com o via cep.

    //utilizado o atributo 'blur' para assim que o cep for digitado acionar um evento, que no caso será a function associada.
    document.getElementById('cepOrigem').addEventListener('blur', function() {
        
        let cep = this.value.replace(/\D/g, '');
        
        if (cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`) // fetch é api de busca externa do javaScript.
            //por padrão a API do VIACEP traz em formato JSON dados do logradouro, localidade e uf. aonde armazenamos em rua, cidade e estado através do response.json.

                .then(response => response.json()) //call back function . them para retornar 
                .then(data => {
                        if (data.erro) {
                            alert('CEP não encontrado!');
                    } else {
                        document.getElementById('rua').value = data.logradouro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    }
                })
               
        }
    });

    // Validação do prazo de entrega par não permitir data atual ou anterior
    document.getElementById('formularioEntrega').addEventListener('submit', function(event) {
        event.preventDefault();

        let prazoEntrega = new Date(document.getElementById('prazoEntrega').value);
        let hoje = new Date();
        

        if (prazoEntrega < hoje) {
            alert('O prazo de entrega não pode ser inferior à data atual!');
            return;
        }

        // Processar os dados da entrega limpar o formulário.
        alert('Entrega realizada com sucesso!');
        document.getElementById('formularioEntrega').reset();
    });
});
