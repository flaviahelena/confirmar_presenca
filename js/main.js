function enviarConfirmacao(){

    var telefone= "5531986042241";
    //var telefone= "5531988443535";
    var nome = document.getElementById("dado1").value;
    var url = "https://api.whatsapp.com/send?phone="+telefone+"&text=Ol%C3%A1!%20Gostaria%20de%20confirmar%20a%20presen%C3%A7a%20de%20"+nome+"%20para%20o%20casamento%20de%20Fernanda%20e%20Rodrigo!"
    
    // Abre a URL em uma nova aba
    window.open(url);
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
