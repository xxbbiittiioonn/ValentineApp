const messages = [
  "Ты — свет в моём сердце.",
  "Каждый день с тобой — праздник.",
  "Ты заставляешь моё сердце биться быстрее.",
  "С тобой я чувствую себя счастливым(ой).",
  "Ты — моя опора и вдохновение.",
  "Я люблю тебя больше, чем могу выразить словами.",
  "Ты — лучшая часть моей жизни.",
  "С тобой всё возможно.",
  "Ты украшаешь мою реальность.",
  "С тобой я становлюсь лучше.",
];

const button = document.getElementById('generateMessage');
const messageElement = document.getElementById('message');

// Функция генерации сердечек
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Добавляем обработчик события на кнопку
button.addEventListener('click', () => {
  // Генерируем случайное сообщение
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
  
  // Добавляем анимацию появления текста
  messageElement.classList.remove('visible');
  setTimeout(() => {
    messageElement.classList.add('visible');
  }, 100);

  // Создаём 10 сердечек при каждом нажатии
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200);
  }
});