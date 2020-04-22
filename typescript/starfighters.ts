import {Spacecraft, Containership} from './base-ship'

export class MillenniumFalcon extends Spacecraft {
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
