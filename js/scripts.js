// Aguarda até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const qrCodeBtn = document.querySelector("#qr-form button");
    const qrCodeInput = document.querySelector("#qr-form input");
    const qrCodeImg = document.querySelector("#qr-code img");

    // Eventos

    // gerar qr code
    function generatorCode() {
        const qrCodeInputValue = qrCodeInput.value;
        qrCodeBtn.innerText = "Gerando Codigo...";

        if (!qrCodeInputValue) return;

        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

        qrCodeImg.addEventListener("load", () => {
            container.classList.add("active");
            qrCodeBtn.innerText = "Código Criado";
        });
    }

    qrCodeBtn.addEventListener("click", () => {
        generatorCode();
    });

    qrCodeInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            generatorCode();
        }
    });

    // limpar área
    qrCodeInput.addEventListener("keyup", () => {
        if (!qrCodeInput.value) {
            container.classList.remove("active");
            qrCodeBtn.innerText = "Gerar QR Code";
        }
    });
});
