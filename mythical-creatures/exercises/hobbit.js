class Hobbit{
  constructor(name,age){
    this.name = name;
    if(age === undefined){
      this.age = "0"
    } else {
      this.age = age
    }
    if(age < 32 || age === undefined){
      this.adult = false
    } else {
      this.adult = true
    }

    if(this.age > 100 ){
      this.old = true
    } else {
      this.old = false
    }
    this.hasRing = false
  }

  celebrateBirthday(){
    this.age++
    if(this.age>32){
      this.adult = true
    }
    if(this.age > 100){
      this.old = true
    }
  }

  getRing(){
    if(this.name === 'Frodo'){
      this.hasRing = true
      return 'Here is the ring!'
    } else {
      this.hasRing = false
      return 'You can\'t have it!'
    }
  }

}

module.exports = Hobbit;
