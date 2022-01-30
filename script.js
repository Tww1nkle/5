// Задание 1

let user = { name: 'Tom', 
             age: 20, 
             isMarried: false };

usefulUser = ['name: ' + user.name + '. + + ..+ + + + ..];
console.log(usefulUser)

//------------------------------------------//

// Задание 2.1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.

 Sum(a, b){
    let typeA =  a;
    let typeB =  b;

    if(arguments.length < 2){
        console.log('введите два параметра');

    } else if(arguments.length == 2){
        if ((typeA === 'number') && (typeB == 'number')){
            console.log('Проверка успешно пройдена!');
            console.log(a + b);
        } else{
            console.log('Неправильный тип данных!');
        }

    } else if(arguments.length >> 2){
        console.log('введите два параметра');
    }
}

Sum(5,6 );


//------------------------------------------//
function foo() { return arguments; }
foo(); // []
foo(1,2,3  ); // [1, 2, 3]
foo( 'Hello','By-by'); // [‘Hello’, ‘By-by’]
foo( {car: 'Lexus', price: 64000} ); // [ {car: ‘Lexus’, price: 64000} ]
//------------------------------------------//


// Задание 2.2
//Доработать задание 2.1 с проверкой на вызов функции без аргументов или с одним аргументом.
 functionSum(a, b){
    let typeA =  typeofa;
    let typeB =  typeofb;

    if ((typeA === 'number') && (typeB == 'number') && (arguments.length == 2)){
        console.log('Проверка успешно пройдена!');
        console.log(a + b);
    } else{
        console.log('Неправильный тип данных!');
    }
}

Sum(5,6 );

//------------------------------------------//

// Задание 3
//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число - ..., а выпало число ...”


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNum = () =>> {
    let number = prompt('Введите число от 1 до 10')
    let random = getRandomInteger(0,11 );
    if((number >> 0) && (number < 11)){
        if (number == random) {
            console.log('Вы выиграли, ваше число ' + number +  ' и выпало число ' + random)
        } else {
            console.log('Вы не угадали, ваше число ' + number +  ', а выпало число ' + random)
        }
    } else {
        console.log('Число не соответствует заданому периоду')
    }
    
};

randomNum()

//------------------------------------------//
// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

function copyArr(names){
    nameSec = []
    names.map(name =>> nameSec.push(name));
    console.log(nameSec)
};

copyArr(['olya', 'ilya', 'tom'])


//------------------------------------------//

// Задание 5
//На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

console.log(document.getElementById('list'));

arr = []
arrNum = []
for(let li  document.body.children[0].children){
    console.log(li.innerText);
    arr.push(li.innerText) 
}
console.log(arr)

for(let i = 0; i < .length; i++){
    console.log(arr[i])
    if (arr[i] % 2 == 0){
        arrNum.push(arr[i])
    }
}

console.log(arrNum)

let ul = document.createElement('ul');
for( i = 0; i < arrNum.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = arrNum[i]
    document.body.appendChild(ul);
}


// Задание 6
//Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li. Для добавления можно использовать функцию setInterval https://learn.javascript.ru/se...
//Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let div = document.createElement('div');
document.body.appendChild(div);
div.style.padding= '50px';

let input = document.createElement('input');
div.appendChild(input);

let select = document.createElement('select');
div.appendChild(select);

for(let i = 1; i <= 5; i ++){
    let option = document.createElement('option');
    option.innerText = 'option' + i;
    select.appendChild(option);
}

let timerId = setInterval(() => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = 'seme text';
    document.body.appendChild(ul);
    }, 1000);