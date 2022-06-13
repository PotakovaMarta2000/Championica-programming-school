// Прописываем класс через ключевое слово class
// Задаем параметры(переменные) через конструктор
// Указываем устанавку внутри переменных конструктора класса, данные параметрa через this
class Person {
constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
}
// Внутри класса создаем функцию info()
info() {

    console.log('Человек: ' + this.name + ' Возраст: ' + this.age + ' Семейное положение: ' + this.isMarried);
    }
}

// На основе класса, создаем обьект
let Alex = new Person('Alex', 25, true);
let John = new Person('John', 18, false);

// Переопределяем обьект
Alex.name = 'Alex2';

// Выводим info() обьекты
Alex.info();
John.info();

// console.log(Alex.age);
// console.log(Alex.name);
