class Spacecraft{
    constructor (public propulsor: string){}
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft {
    cargoContainers: number
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }
    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else {console.log('failed to jump into hyperspace')}
    }
}
let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {
    cargoContainers: number
}

let goodFortheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodFortheJob (falcon) ? 'yes': 'no'}`)