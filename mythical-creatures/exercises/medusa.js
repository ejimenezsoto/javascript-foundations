var Person = require('./person');
var Statue = require('./statue');


class Medusa{
  constructor(name){
    this.name = name
    this.statues = []
  }
  gazeAtVictim(victim){
    if(this.statues.length >= 3){
      this.statues.push(new Statue(victim.name))
      var returned = new Person(this.statues[0].name,'relieved')
      console.log(returned)

      this.statues.shift()

      return returned
    } else {
      this.statues.push(new Statue(victim.name))
      return
    }


  }
}
module.exports = Medusa;
