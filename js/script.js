// Seleciona os campos do formulário
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");


// Máscara para CPF
cpf.addEventListener("input", function () {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;
});


// Máscara para telefone
telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");

    telefone.value = valor;
});


// Máscara para CEP
cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.slice(0, 8);

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    cep.value = valor;
});

// Envio do formulário
const formulario = document.getElementById("form-voluntario");

formulario.addEventListener("submit", function (event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Verifica as validações do HTML5
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Exibe mensagem de sucesso
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    mensagemSucesso.textContent =
        "Cadastro enviado com sucesso! Obrigado por querer fazer parte da nossa equipe.";

    mensagemSucesso.style.display = "block";

    // Limpa o formulário
    formulario.reset();
});