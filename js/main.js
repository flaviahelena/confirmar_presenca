function enviarConfirmacao(){

}

function abreOpcaoConfirmacao(){
    var botao = document.getElementById('botao_opcao');

    botao.addEventListener('click', function() {
        alert('Botão clicado!');
    });

    // Recupera todos os botões de opção pelo nome
    /*var botoesOpcao = document.querySelector('input[name="opcao"]');
        
    // Adiciona um ouvinte de evento para cada botão de opção
    botoesOpcao.forEach(function(botao) {
        botao.addEventListener('change', function() {
            alert('Opção selecionada: ' + this.value);
        });
    });*/
}

function abreInput() {
    document.getElementById('meuInput').style.display = 'block';
}

function fecha() {
    document.getElementById('meuInput').style.display = 'block';

}
