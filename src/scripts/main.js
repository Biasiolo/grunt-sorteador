document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault(); // Evita que o formulário seja enviado

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        console.log(numeroAleatorio);
        numeroAleatorio = Math.floor(numeroAleatorio);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
    })

})