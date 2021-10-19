
class Ogre{
    constructor(ogreObj){
        this.name = ogreObj.name
        this.home = ogreObj.abode || 'Swamp'
        this.swings = 0
    }
    encounter(human){
        if(human.noticesOgre() === true){
            this.swingAt()
            human.encounterCounter ++
        } else {
            human.encounterCounter ++
        }
    }
    swingAt(human){
        this.swings++
    }
}

module.exports = Ogre;