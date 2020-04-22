import{Spacecraft, Containership} from './base-ship'
import{MillenniumFalcon} from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodFortheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodFortheJob (falcon) ? 'yes': 'no'}`)