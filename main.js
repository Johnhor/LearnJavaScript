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
