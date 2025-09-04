<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Endereço de e-mail de destino
    $destinatario = "ph.doamaralcavalcante@gmail.com"; // Substitua pelo seu e-mail
    $assunto = "Nova mensagem de contato de: $nome";

    // Cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Corpo do e-mail
    $corpo = "<h2>Mensagem de Contato</h2>";
    $corpo .= "<p><strong>Nome:</strong> $nome</p>";
    $corpo .= "<p><strong>Email:</strong> $email</p>";
    $corpo .= "<p><strong>Mensagem:</strong><br>$mensagem</p>";

    // Função mail() para enviar o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Por favor, tente novamente.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>