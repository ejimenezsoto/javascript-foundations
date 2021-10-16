var Direwolf = require('./direwolf')

class Stark{
  constructor(name,location,safe){
    this.name = name;
    if(location === undefined){
      this.location = 'Winterfell'
    } else {
      this.location = location
    }
    if(safe === undefined){
      this.safe = false
    } else {
      this.safe = true
    }
  }
  sayHouseWords(){
    if(this.safe === false){
      return 'Winter is Coming'
    } else {
      return 'The North Remembers'
    }
  }
  callDirewolf(name,home){
    
    var wolf = new Direwolf(name,home)
    wolf.home = this.location
    wolf.protect(this)
    return wolf
  }

}
module.exports = Stark;
