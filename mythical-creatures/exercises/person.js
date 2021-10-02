class Person{
  constructor(name,mood){
    this.name = name
    if(mood === undefined){
      this.mood = 'frightened'
    } else {
      this.mood = mood
    }
  }
}
var p1 = new Person('enzo','relieved')
console.log(p1);
module.exports = Person;
