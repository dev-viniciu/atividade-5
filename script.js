// 1 - Modo escuro

let botao = document.getElementById("btn-tema");

botao.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});


// 2 - Contador de visitas

let visitas = 0;

let botaoVisita = document.getElementById("btn-visita");
let numero = document.getElementById("numero-visitas");

botaoVisita.addEventListener("click", function() {
    visitas++;
    numero.textContent = visitas;
});


// 3 - Barras de progresso

let barras = document.querySelectorAll(".progresso");

for (let i = 0; i < barras.length; i++) {
    let valor = barras[i].getAttribute("data-valor");
    barras[i].style.width = valor + "%";
}


// 4 - Formulário

let formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    if (nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById("resposta-form").textContent =
        "Obrigado, " + nome.value + "! Sua mensagem foi enviada.";

        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }
});