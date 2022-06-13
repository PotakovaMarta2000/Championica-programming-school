// // Объявляем переменную text, присваиваем значение  document.getElementById('text')
// let text = document.getElementById('text');  /* document-глобальный объект, встроенный объект в JS,позволяет 
//                                                 управлять всей DOM структурой сайта, метод getElementById */
// // Выводим значение атрибута id в консоль 
// console.log (text.id);
// // Выводим значение атрибута title в консоль 
// console.log (text.title);

// // Применяем стиль для обьекта title 
// text.style.backgroundColor = "blue";
// text.style.color = "#fff";

// // Создаем массив spans 
// // let spans = document.getElementsByTagName('span');
// // Перебор массива циклом по тэгам
// // Вывод данных в консоль 
// let spans = document.getElementsByClassName('simple-text');
// // перебор массива циклом по названию класса 
// for(let i = 0; i < spans.length; i ++) {
//     console.log (spans[i].innerHTML);   
// }

//  Вешаем обработчик события addEventListener 
document.getElementById('main-form').addEventListener('submit', checkForm);

// Создаем функцию checkForm 
function checkForm(event) {
//   методом event.preventDefault() отключаем стандартное поведение страницы-перезагрузку 
    event.preventDefault();

let el = document.getElementById('main-form');

// Получаем значения el.name.value 
let name = el.name.value;
let pass = el.pass.value;
let repass = el.repass.value;
let state = el.state.value;
// Проверяем корректность вывода данных в консоли 
// console.log(name + "-" + pass + "-" + repass + "-" + state); 

// Прописываем проверки 
let fail = "";

if (name == ""|| pass == ""|| repass == ""|| state == "")
    fail = "Заполните все поля";
else if (name.lengh <= 1 || name.lengh > 50)
    fail = "Введите корректное имя";
else if (pass != repass)
    fail = "Пароль не совпадает";
else if (pass.split("&").lengh >1)
    fail = "Некорректный пароль";

if (fail != "") {
    document.getElementById('error').innerHTML = fail;
    return false;
} else {
    alert("Данные заполнены корректно");
    return true;
}
}