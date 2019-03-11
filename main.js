//Задачи на разные темы
//Первая задача

 function abbrevName(name){
     var array = name.split(' ');
      return array[0].charAt(0) + '.' + array[1].charAt(0);
}

 console.log(abbrevName("Sam Harris"));
 console.log(abbrevName("Patrick Feenan"));
 console.log(abbrevName("Evan Cole"));
 console.log(abbrevName("P Favuzzi"));
 console.log(abbrevName("David Mendieta"));


// Вторая задача

 function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
 }

 console.log(rowSumOddNumbers(1));
 console.log(rowSumOddNumbers(42));

//Третья задача (возврат строки с заглавной буквы)
function func(str){
   return str.substring(0,1).toUpperCase()  + str.substring(1);
}

console.log(func('text'));
console.log(func('ivan'));


//Четвертая задача (сравнение первых букв с последними) 

function feast(beast, dish) {
   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

console.log('ara', 'text');
console.log('text', 'texts');

//Пятая задача(возврат имени с большой буквы либо строку)

function hello(name) {
  if(name === '' || name === undefined ){
        return 'Hello, World!';
      }
  else{
     return 'Hello, ' + name.charAt(0).toUpperCase() + name.substring(1).toLowerCase() + '!';    
  } 
}

console.log(hello(''));
console.log(hello());
console.log(hello('vaneA'));
console.log(hello('aNdReI'));

//Шестая задача (Остаток от деления)

function even_or_odd(number) {
  if(number % 2 === 0){
    return 'Even';
  }
  else{
    return 'Odd';
   }
}


console.log(even_or_odd(2));
console.log(even_or_odd(5));


//Седьмая задача (вывести число в минус)

function makeNegative(num) {
  var test = '-' + num;
   return +test;
}


console.log(makeNegative(42));

//Восьмая задача (поправить код)

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
   }
    return "Hello, " + name + "!";
}

console.log(greet('Johnny'));
console.log(greet('vasea'));

//Девятая задача (Сравнение четных и нечетных чисел)

function loveFunc(flower1,flower2){
  return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0;
}

console.log(loveFunc(1,4));
console.log(loveFunc(1,1));

//Десятая задача (Возвращение true и false в виду строки) 

function convert(bool){
   if(bool === true){
      return 'Yes'; 
    } 
   else if(bool === false){
      return 'No';
   }
   return bool;
} 

console.log(convert(true));
console.log(convert(false));

//Одинадцатая задача 

function rentalCarCost(d) {
     if(d < 3){
        return d * 40;
     }
       else if(d < 7){
        return (d * 40) - 20;
       }
       
      return (d * 40) - 50;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(4));
console.log(rentalCarCost(9));

//Двенадцатая задача

function basicOp(operation, value1, value2)
{
   if(operation === '+'){
     return value1 + value2;
   }
   else if(operation === '-'){
     return value1 - value2;
    }
   else if(operation === '*'){
     return value1 * value2;
    }
   else{
     return value1 / value2;
    }
}

console.log(basicOp('+',2,3));
console.log(basicOp('-',2,3));
console.log(basicOp('*',2,3));
console.log(basicOp('/',2,3));



//Тринадцатая задача

function wilson(p){
	if(p === 5 || p === 13 || p === 563){
		 return true;
	}
	return false;
} 

console.log(wilson(2));
console.log(wilson(5));
console.log(wilson(3));


//Четырнадцатая задача(масивы)
 
  function reverse(n){
    let arr = []; 
     for(let i = n; i > 0; i--){
       arr.push(i);
     }
     return arr;
  }

  console.log(reverse(5));
  
  
  //Усечение строки
  
    function check(str,maxLength){
          if(str.length > maxLength){
             return str.substr(0,maxLength - 3) + '...';
          }
      }

     console.log(check('hello everybody', 12));


//Убираем знак ($) и превращаем строку в число

    function checkVal(val){
         if(val.charAt(0) === '$'){
             return val.slice(1);
            }
      }
     console.log(+checkVal('$123'));
     
     
     
     //example
     
     
function game(a,b){
   let result = false;
    for(i = 0; i <= a.length; i++){
       if(a[i] === b){
         result = true;
       }
    }
  return result;
}
console.log(game([2,3,5,4], 3));
console.log(game(['t','e','s','t'],'r'));
//Используем метод includes для поиска   (тема строк и массивов)

const obj = {
  className: 'open menu'
}

function addClass(element, word){
  const words = element.className.split(' ');
  console.log(words,word);
  if(words.includes(word)){
    return;
  }
  element.className += ' ' + word; 
}

addClass(obj,'me');
addClass(obj,'open');
console.log(obj.className);


//Делаем так же только без includes. Усложняем пробелами в строке. Используем метод перебора (for of)

const obj = {
  className: 'open      menu'
}

function addClass(element, word){
    const words = element.className.split(' ');
    words.push(word);

    const newObj = {};
    for(let key of words){
       newObj[key] = 1;
    }

    delete newObj[''];
    element.className = Object.keys(newObj).join(' ');

}

addClass(obj,'me');
addClass(obj,'for');
console.log(obj.className);




//тема объекты,прототип объектов
let b = 200;

const person = {
  name: 'John',
  age: 22,
  salary: 1000,
  statusWork: 100,
  bonus: function(){
       if(person || person2 || person3){
      if(this.statusWork >= 90){
         return this.salary + b + '$';
      }
      else{
        return 'Sorry' + ' '  + this.name + ',this month you dont take a bonus!';
      }
   }
   return false;
  }
}

const person2 = {
  name: 'Evan',
  age: 21,
  salary: 900,
  statusWork: 69,
  __proto__: person
}

const person3 = {
  name: 'Luke',
  age: 24,
  salary: 840,
  statusWork: 48,
  __proto__: person
}

//Создание нового массива с помощью метода concat (старый способ через slice)
let a = [1,2];
let b = a.concat(3,4) && a.concat([3,4],100,true,'text');
console.log(b);
let c = [1,2].concat([3,4],100,300);
console.log(c);

//Оператор spread (создание нвого массива через него)
const l = [...[3,4], ...'text'];
console.log(l);

//Перебор для массивов(Методы)
//Перебор для объектов(Методы)

//Глобальные объект (примеры замыканий)
//Замыкание,это функция вместе со всеми переменными кторые ей доступны.

function sayHi(name, age){
  // console.log(greet(name));
  return function(){
    console.log(greet(name));
  }

   function greet(){
      return chooseAge() + ',' + name;
   }
   function chooseAge(){
     if(age > 18){
       return 'Hi Mr ';
     }
     else{
       return 'Hi';
     }
   }
}
var work = sayHi('john', 18);


//Вложенная функция и вызов через двойные скобки

function calc(a){
  var func = function(b){
     console.log(a + b);
  }
  return func;
}
calc(2)(1);
calc(4)(-1);
calc(100)(23);
