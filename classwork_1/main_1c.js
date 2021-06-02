// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
let a1 = (11*2+2)+10; console.log(a1)
let a2 = 20+20-10-18; console.log(a2)
let a3 = 55*12/(5*2); console.log(a3);
let a4 = 200-(5*9)-65; console.log(a4);
let a5 = 20+20+100-53; console.log(a5)

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3; console.log(a6); // 2
let a7 = 3 % 5; console.log(a7);// 3
let a8 = 5 + '3'; console.log(a8);// 53
let a9 = '5'- 3; console.log(a9);// 2
let a10 = 75 + 'кг'; console.log(a10);//75кг

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
let height = 23;
let wight = 10;
let s = height * wight;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
let heigthC = 10;
let dC = 4;
// let v = 3.14*(dC*dC)*heigthC; console.log(v);
let v = 3.14 * Math.pow(4,2)*heigthC; console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert('Чуприна Ігор Вікторович  \n 35  \n JavaScript ');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой';
let concatenation = (`${str1} ${str2} ${str3}`);
document.write(concatenation + '<br/>');

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str66 = "20";
// let a = 5;
// document.write(str66 + a + "<br/>"); 205
// document.write(str66 - a + '<br/>');  15
// document.write(str66 * "2" + "<br/>"); 40
// document.write(str66 / 2 + "<br/>");   10

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let num1 = +prompt('Enter the number 1');
let num2 = +prompt('Enter the number 2');
let sum = num1 + num2;
alert(sum);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt('Enter you name');
let surname = prompt('Enter you surname');
let age = +prompt('Enter you age');
alert(`Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}`);

// =====================
// ======ДОП============
// =====================
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let numX = +prompt('num1');
let numY = +prompt('num2');
let numZ = +prompt('num3');
if (numX < numY && numX < numZ && numY < numZ){
    console.log(numX, numY, numZ)
} else if (numX < numY && numX < numZ && numZ < numY ){
    console.log(numX, numZ, numY)
} else if (numY < numX && numY < numZ &&  numX < numZ){
    console.log(numY, numX, numZ)
} else if (numY < numX && numY < numZ && numZ < numX){
    console.log(numY, numZ, numX)
} else if (numZ < numX && numZ < numY && numX < numY){
    console.log(numZ, numX, numY);
}else  if (numZ < numX && numZ <numY && numY < numX){
    console.log(numZ, numY, numX)
}else {
    console.log('ERROR')}

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLight = prompt('Сетофор:\n красный, \n желтый, \n зеленый.')
switch (trafficLight) {
    case 'красный':
        console.log('стой');
        break;
    case 'желтый':
        console.log('подожди');
        break;
    case 'зеленый':
        console.log('иди');
        break;
    default:
        console.log('делай что хочешь');
}
3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLight1 = prompt('Сетофор:\n красный, \n желтый, \n зеленый.');
let isRoadClear = prompt('Машины:\n есть \n нет');
if (trafficLight1 === 'зеленый' && isRoadClear === 'нет'){
    console.log('иди')
}else if (trafficLight1 === 'зеленый' && isRoadClear === 'есть'){
    console.log('вывести подожди пока нарушители проедут')
}else if (trafficLight1 === 'желтый' && isRoadClear === 'нет'){
    console.log('все равно жди')
}else if (trafficLight1 === 'желтый' &&  isRoadClear === 'есть'){
    console.log('жди')
}else if (trafficLight1 === 'красный' && isRoadClear === 'нет'){
    console.log('стой все равно')
}else if (trafficLight1 === 'красный' && isRoadClear === 'есть'){
    console.log('стой и жди')
}else {
    console.log('делай что хочешь')
}








