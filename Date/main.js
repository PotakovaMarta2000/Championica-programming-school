// Создаем обьект date на основе класса new Date()
let date = new Date();

// Выводим в консоль текущий год, обращаемся к обьекту date, методу getFullYear()
console.log(date.getFullYear());

// Выводим в консоль текущий месяц, обращаемся к обьекту date, методу getMonth()
console.log(date.getMonth() + 1);

// Устанавливаем свое текущее время методом date.setHours()
date.setHours(10);
date.setMinutes(10);
date.setSeconds(10);

// Выводим в консоль текущее время
console.log("Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());