// Бесконечный интервал
// Cоздаем переменную counter
// let counter = 0;
// // Создаем интервал. безымянную функцию
// setInterval(function()  {
// counter++;
// console.log("Прошло секунд: " + counter); 
// }, 1000);

// Cоздаем переменную counter
let counter = 0;

// Присваиваем id setInterval
let id = setInterval(my_func, 1000);

// Прописываем функцию
function my_func() {
    counter++;
    console.log("Прошло секунд: " + counter);

// Прописываем условия внутри функции, очищаем интервал
    if(counter == 3)
    clearInterval(id);
}