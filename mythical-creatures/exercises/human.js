const Ogre = require("./ogre")

class Human{
    constructor(name){
        this.name = name
        this.encounterCounter = 0
        this.knockedOut = false
    }
    noticesOgre(){
        if(this.encounterCounter === 3){
            return true
        } else if (this.encounterCounter === 6){
            return true
        } else {
            return false
        }
    }
}
module.exports = Human;