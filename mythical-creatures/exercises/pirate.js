class Pirate{
  constructor(name,job){
    this.name = name;
    if(job === undefined){
      this.job = 'scallywag'
    } else {
      this.job = job
    };
    this.cursed = false;
    this.booty = 0;
  }
  robShip(){

    if(this.booty >= 500){
      this.cursed = true
      return 'ARG! I\'ve been cursed!'
    } else {
      this.booty = this.booty + 100;
      return 'YAARRR!';
    }
  }

  liftCurse(){
    if(this.booty<300 || this.curse === false){
      return 'You don\'t need to lift a curse!'
    } else {
      this.booty = this.booty - 300
      this.cursed = false
      return 'Your curse has been lifted!'
    }

  }

}

module.exports = Pirate;
