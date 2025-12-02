// ===============================
//  SCRIPT DE ENVIO - EMAILJS
// ===============================

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // impede o reload da página

    // ===============================
    // 1. VALIDAR reCAPTCHA
    // ===============================
    let captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse) {
        alert("⚠ Por favor, confirme que você não é um robô.");
        return;
    }

    // ===============================
    // 2. CAPTURAR DADOS DO FORMULÁRIO
    // ===============================
    let params = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    // ===============================
    // 3. ENVIAR EMAIL COM EMAILJS
    // ===============================
    emailjs
        .send("fael_da31", "rafael2910*", params)
        .then(function () {

            alert("✅ Mensagem enviada com sucesso!");
            
            // limpa o formulário
            document.getElementById("contact-form").reset();

            // reseta o captcha
            grecaptcha.reset();
        })
        .catch(function (error) {
            console.error("Erro:", error);
            alert("❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
});
