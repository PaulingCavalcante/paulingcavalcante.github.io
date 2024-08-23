document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var formData = new FormData(this); // Captura os dados do formulário

    fetch('php/send_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostra uma mensagem de sucesso ou erro
            document.getElementById('contatoForm').reset(); // Limpa o formulário
        })
        .catch(error => console.error('Erro:', error));
});