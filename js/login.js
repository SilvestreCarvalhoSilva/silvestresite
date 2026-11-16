
// Dados corretos para acessar o sistema
const emailCorreto = "admin@silveagro.com.br";
const senhaCorreta = "123456";

// Captura o formulário
const formulario = document.getElementById("form-login");

// Captura os campos
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// Captura o espaço da mensagem
const mensagem = document.getElementById("mensagem");

// Verifica os dados quando clicar em Entrar
formulario.addEventListener("submit", function(event) {

    // Impede o envio automático do formulário
    event.preventDefault();

    // Pega os valores digitados
    const email = campoEmail.value.trim();
    const senha = campoSenha.value;

    // Verifica se os dados estão corretos
    if (
        email.toLowerCase() === emailCorreto.toLowerCase() &&
        senha === senhaCorreta
    ) {

        // Envia o formulário para a página definida no action
        formulario.submit();

    } else {

        mensagem.style.color = "MediumBlue";

        mensagem.textContent =
            "E-mail ou senha incorretos. Verifique seus dados e tente novamente.";

    }

});

/* ============================= */
/* recuperarsenha */
/* ============================= */

// Captura o link de recuperar senha

const recuperarSenha = document.getElementById("recuperarsenha");

recuperarSenha.addEventListener("click", function() {

    alert("Para recuperar sua senha, entre em contato com a equipe SilveAgro pelo nosso canal de atendimento.");

});
