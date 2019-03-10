//Используем метод includesдля поиска   (тема строк и массивов)

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
