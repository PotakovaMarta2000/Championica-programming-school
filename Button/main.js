// Обьявляем глобальную переменную
let counter = 0;

// Вызываем функцию onClickButton() 
function onClickButton(el) {
// Подсчитываем кол-во нажатий на кнопку
counter++;
// Обращаемся к св-вам обьекта innerHTML
el.innerHTML = "Вы нажали на кнопку!" + counter;
// Задаем стили для el
el.style.background = "red";
el.style.color = "#fff";
el.style.cssText = "border-radius:5px; border:0; font-size:25 px;"
// Обращаемся к атрибуту onclick, выводим данные в консоль
console.log(el.onclick);

}
