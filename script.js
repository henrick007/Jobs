// Get the elements
function atualizarInformacoes() {
    // Obtendo os valores dos campos da seção "formulario"
    var novoNome = document.getElementById('new_nome').value;
    var novaIdade = document.getElementById('new_idade').value;
    var novoEndereco = document.getElementById('new_endereco').value;
    var novoBairro = document.getElementById('new_bairro').value;
    var novoEstado = document.getElementById('new_estado').value;
    var novaBiografia = document.getElementById('new_biografia').value;

    // Atualizando os elementos da seção "informacoes"
    document.getElementById('nome').innerHTML = 'Nome: ' + novoNome;
    document.getElementById('idade').innerHTML = 'Idade: ' + novaIdade;
    document.getElementById('endereco').innerHTML = 'Endereço: ' + novoEndereco;
    document.getElementById('bairro').innerHTML = 'Bairro: ' + novoBairro;
    document.getElementById('estado').innerHTML = 'Estado: ' + novoEstado;
    document.getElementById('biografia').innerHTML = 'Biografia: ' + novaBiografia;
}
document.getElementById("formularioAtualizacao").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o envio padrão do formulário
    atualizarInformacoes(); // Chamar a função de atualização
});