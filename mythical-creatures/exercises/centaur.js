class Centaur{
  constructor(name,type){
    this.name = name;
    this.type = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0
  }
  shootBow(){

    if(this.sleep === true || this.layingDown === true){
      return 'NO!'
    }
    this.count++
    if(this.count > 2){
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!'
  }
  run(){
    if(this.sleep === true || this.layingDown === true){
      return 'NO!'
    }
    this.count++
    if(this.count > 2){
      this.cranky = true
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }
  sleep(){
    if(this.standing === true){
      return 'NO!'
    } else {
      this.cranky = false;
      this.count = 0
      return 'ZZZZ'
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
    return
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
    return
  }
  drinkPotion(){
    if(this.standing === false){
      return 'Not while I\'m laying down!'
    }
    this.cranky = false;
  }
}
module.exports = Centaur;
