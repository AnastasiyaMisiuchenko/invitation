class Model{

}
class View{

}
class Controller{

}
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Проверка, что элемент в пределах видимой области
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

function timer(){
    const weddingDate = new Date("2025-08-10T00:00:00").getTime(); // может эту переменную вынести потом просто в модуль

    const now = new Date().getTime();
    const remainingTime = weddingDate - now; // разница

    const daysRemaining = Math.floor(remainingTime / (1000 * 60 * 60 * 24));// кол-во млс в с, с в мин, мин в ч, ч в сутках
    const hoursRemaining = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${daysRemaining}`;
    document.getElementById('hours').textContent = `${hoursRemaining}`;
    document.getElementById('minutes').textContent = `${minutesRemaining}`;
    document.getElementById('seconds').textContent = `${secondsRemaining}`;

}
timer();
setInterval(timer, 1000);