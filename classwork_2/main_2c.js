// // // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
const arr1 = ['a', 'b', 'c'];
arr1.push(1, 2, 3);
console.log(arr1)
// //
// // // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
const arr2 = [1, 2, 3];
arr2.reverse();
console.log(arr2);
// //
// // // Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);
// //
// // // Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
const arr4 = [1, 2, 3,];
arr4.unshift(4, 5, 6);
console.log(arr4);
// //
// // // Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
const arr5 = [1, 2, 3, 4, 5,];
arr5.shift();
arr5.shift();
arr5.shift();
console.log(arr5);
// //
// // // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
const arr6 = [1, 2, 3, 4, 5];
arr6.pop();
arr6.pop();
arr6.pop();
console.log(arr6);
// // //
// // // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
const arr7 = [1, 2, 3,];
arr7.push('a', 'b', 'c');
console.log(arr7);
//
// // // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const arr8 = [1, 22, 63, 24, 11, 18, 4, 77, 45, 55];
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] % 2 === 0) {
        console.log(arr8[i]);
    }
}
// //
// // // Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const arrNumbers = [10, 23, 36, 58, 24, 84, 36, 31, 2, 9];
const arrEmp = [];
for (let number of arrNumbers) {
    arrEmp.push(number)
}
console.log(arrEmp);
console.log(arrNumbers);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let a = ''
const arrLetters = ['a', 'b', 'c'];
for (let i = 0; i < arrLetters.length; i++) {
    a = a + arrLetters[i];
}
console.log(a);
//
// // // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let b = '';
const arrLetters2 = ['a', 'b', 'c'];
let i = 0;
while (i < arrLetters2.length) {
    b = b + arrLetters2[i];
    i++;
}
console.log(b);
//
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let c = '';
const arrLetters3 = ['a', 'b', 'c'];
for (let letter of arrLetters3) {
    c = c + letter;
}
console.log(c);
//
// // // ====ДОДАТКОВО 1=======
// // //
// // // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
const arrNum10 = [2,17,13,6,22,31,45,66,100,-18];

// // // 1. перебрати його циклом while
let j = 0
while (j < arrNum10.length){
    console.log(arrNum10[j]);
    j++
}

// // //     2. перебрати його циклом for
for (i = 0; i < arrNum10.length; i ++) {
    console.log(arrNum10[i]);
}

// // // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < arrNum10.length){
    if (arrNum10[k] % 2 === 1){
        console.log(arrNum10[k]);
    }
    k++
}

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for ( let i = 0; i < arrNum10.length; i++){
    if (arrNum10[i] % 2 === 1){
        console.log(arrNum10[i]);
    }
}


// // 5. перебрати циклом while та вивести  числа тільки парні  значення
let y = 0
while (y < arrNum10.length){
    if (arrNum10[y] % 2 === 0){
        console.log(arrNum10[y]);
    }
    y++;
}


// // 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arrNum10.length; i ++){
    if (arrNum10[i] % 2 === 0){
        console.log(arrNum10[i]);
    }
}


// // 7. замінити кожне число кратне 3 на слово "okten"


// // // 8. вивести масив в зворотньому порядку.
arrNum10.reverse();
console.log(arrNum10);

// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let v = arrNum10.length - 1;
while (v >= 0) {
    console.log(arrNum10[v])
    v --
}
console.log('____________2');
for (let i = arrNum10.length - 1; i >= 0; i--){
    console.log(arrNum10[i]);
}
console.log('______________3');
let z = arrNum10.length - 1;
while (z >= 0){
    if (arrNum10[z] % 2 === 1){
        console.log(arrNum10[z]);
    }
    z--;
}
console.log('_______________4');
for (let i = arrNum10.length - 1; i >=0; i--){
    if (arrNum10[i] % 2 === 1){
        console.log(arrNum10[i]);
    }
}
console.log('_______________5');
let f = arrNum10.length - 1;
while (f >= 0) {
    if (arrNum10[f] % 2 === 0){
        console.log(arrNum10[f]);
    }
    f--;
}
console.log('_______________6');
for (let i = arrNum10.length - 1; i >= 0; i--){
    if (arrNum10[i] % 2 === 0){
        console.log(arrNum10[i]);
    }
}
console.log('________________7');
for (let i = arrNum10.length - 1; i >= 0; i--){
    if (arrNum10[i] % 3 === 0){
        arrNum10[i] = 'okten';
    }
}
// // 1. Створити пустий масив та :
// //     a. заповнити його 50 парними числами за допомоги циклу.
let arrEmpty1 = [];
for (let i = 0; i < 100; i++){
    if (i % 2 === 0){
        arrEmpty1[i] = i;
    }
}
console.log(arrEmpty1);
//
// //     b. заповнити його 50 непарними числами за допомоги циклу.
let arrEmpty2 = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1){
        arrEmpty2[i] = i;
    }
}
console.log(arrEmpty2);

//  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arrEmpty3 = [];
for (let i = 0; i < 20; i++) {
    arrEmpty3[i] = Math.floor(Math.random() * (99 - 10)*2);
}
console.log(arrEmpty3);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrEmpty4= [];
for (let i = 0; i < 20; i++) {
    arrEmpty4[i] = Math.floor(Math.random() * (732 - 8));
}
console.log(arrEmpty4);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arrEmpty4.length; i = i + 3){
    console.log(arrEmpty4[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arrEmpty4.length; i = i + 3){
    if (arrEmpty4[i] % 2 === 0){
        console.log(arrEmpty4[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrEmpty5= [];
for (let i = 2; i < arrEmpty4.length; i+=3){
    if (arrEmpty4[i] % 2 === 0){
        arrEmpty5[i] = arrEmpty4[i];
    }
}
console.log(arrEmpty5);
console.log('___________5');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arrNumber = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arrNumber.length; i ++ ) {
//     if (arrNumber[i] % 2 === 0){
//         console.log(arrNumber[i]);
//     }
//
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const arrNumb =  [100, 250, 50, 168, 120, 345, 188];
let receipt = 0;
for (let i = 0; i < arrNumb.length; i ++){
    receipt += arrNumb[i] / arrNumb.length;
}
console.log(receipt);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const arrNumbers2 = [2, 33, 23, 56, 37, 1, 55, 8, 6, 9];
const arrNumbers3 = [];
for (let i = 0; i < arrNumbers2.length; i++) {
        arrNumbers2[i] = arrNumbers2[i] * 5; {
        arrNumbers3[i] = arrNumbers2[i];
    }
}
console.log(arrNumbers3);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const arrMix = [1, 25, true, 'okten', false, 75, 36, true];
const arrNumbers4 = [];
for (let i =0; i < arrMix.length; i++){
    if (typeof arrMix[i] === 'number') {
        arrNumbers4[i] = arrMix[i];
    }
}
console.log(arrNumbers4);



