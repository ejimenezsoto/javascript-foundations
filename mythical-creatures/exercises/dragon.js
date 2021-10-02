class Dragon {
  constructor(name,rider){
    this.name = name;
    this.rider = rider;
    this.feedCount = 0

  }

  greet(){
    return `Hi, ${this.rider}!`
  }
  eat(){
    this.feedCount++
  }
  hungry(){
    if(this.feedCount < 3){
      return true
    } else {

      return false
    }
  }
}

var newDragon = new Dragon("smaug","bilbo")
newDragon.hungry()
console.log(newDragon.hungry())
newDragon.eat()
newDragon.eat()
newDragon.eat()
console.log(newDragon.hungry())



module.exports = Dragon;
