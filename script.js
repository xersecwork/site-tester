function generateLink() {
    const wallet = document.getElementById("wallet").value;
    const currency = document.getElementById("currency").value;
    const cryptoCount = document.getElementById("crypto_count").value;
    const comment = document.getElementById("comment").value;

    if (wallet && currency && cryptoCount && comment) {
        // Формируем ссылку с параметрами
        const link = `https://site-domen.com/wallet=${wallet},currency=${currency},crypto_count=${cryptoCount},comment=${comment}`;

        // Отображаем сгенерированную ссылку
        document.getElementById("result").innerHTML = `Сгенерированная ссылка: <a href="${link}" target="_blank">${link}</a>`;

        // Запускаем таймер
        startTimer(3600); // 1 час = 3600 секунд
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerElement = document.getElementById("timer");

    const interval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        // Обновляем отображение времени
        timerElement.textContent = `Время на оплату: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            timerElement.textContent = "Время на оплату вышло.";
            document.getElementById("result").innerHTML = "";
        }
    }, 1000);
}
