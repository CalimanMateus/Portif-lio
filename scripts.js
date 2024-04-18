document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-contato");
    var mensagemEnviada = document.getElementById("mensagem-enviada");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var formData = new FormData(form); 

        fetch('https://formspree.io/f/mpzvkqgj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                mensagemEnviada.style.display = "block"; 
                form.reset(); 
            } else {
                throw new Error('Erro ao enviar o formulário.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});
