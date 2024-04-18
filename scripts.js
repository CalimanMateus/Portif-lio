document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-contato");
    var mensagemEnviada = document.getElementById("mensagem-enviada");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir o envio padrão do formulário

        var formData = new FormData(form); // Obter os dados do formulário

        // Enviar dados para o Formspree
        fetch('https://formspree.io/f/mpzvkqgj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                mensagemEnviada.style.display = "block"; // Mostrar mensagem de sucesso
                form.reset(); // Limpar o formulário após o envio
            } else {
                throw new Error('Erro ao enviar o formulário.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            // Aqui você pode exibir uma mensagem de erro se necessário
        });
    });
});
