class Fairy{
    constructor(name,dust=10,disposition){
        this.name = name;
        this.dust = dust
        this.clothes = {
            dresses: ['Iris']
        }
        this.disposition = disposition || "Good natured"
        this.humanWards = []
    }
    receiveBelief() {
        this.dust += 1
    }
    believe(){
        this.dust += 10
    }
    makeDresses(flowerArr){
        
        this.clothes.dresses = this.clothes.dresses.concat(flowerArr)
    }
    becomeProvoked(){
        this.disposition = "Vengeful"
    }
    replaceInfant(infant){
        if(this.humanWards.length >= 2){
            this.disposition = "Good natured"
        }
        if(this.disposition === 'Vengeful'){
            this.humanWards.push(infant)
            return  infant.disposition = 'Malicious'
        } 
        return infant
    }

}

module.exports = Fairy;