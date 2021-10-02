var Victim = require('./victim')

class Werewolf{
  constructor(name,form,hungry){
    this.name = name;
    if(form === undefined){
      this.form = 'human'
    } else {
      this.form = form
    }
    this.hungry = false
  }
  completeTransformation(){
    if(this.form === 'human'){
      this.form = 'wolf'
      this.hungry = true
      return 'Aaa-Woooo!'
    } else {
      if(this.form === 'wolf'){
        this.form = 'human'
        this.hungry = false
        return 'Where are I?'
      }
    }
  }
  eatVictim(victim){
    if(this.form === 'human'){
      return "No way am I eating Baby, I'd like a burger!"
    } else {
      victim.alive = false;
      this.form = 'human'
      return `Yum, ${victim.name} was delicious.`
    }

  }
}

module.exports = Werewolf;
