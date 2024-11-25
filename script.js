// Массив кольорів
const colors = ['#87CEEB', '#98FB98', '#FFD700', '#FFC0CB', '#FFB6C1'];
let currentIndex = 0;

// Функція зміни фону
function changeBackgroundColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
}
