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

// 1. Pegar o formulário
const formulario = document.getElementById('form-contato');

// 2. Adicionar o ouvinte do evento 'submit'
formulario.addEventListener('submit', function(evento) {
    // 3. Impedir o recarregamento da página
    evento.preventDefault();
    
    // 4. Pegar o campo e seu valor
    let campoNome = document.getElementById('nome');
    let nome = campoNome.value.trim();
    
    // 5. Validar se está vazio
    if (nome === '') {
        alert('Preencha todos os campos!');
        return;
    }
    
    // 6. Mostrar mensagem de sucesso no elemento #resposta-form
    let respostaForm = document.getElementById('resposta-form');
    respostaForm.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    
    // 7. Limpar o campo após o envio
    campoNome.value = '';
});