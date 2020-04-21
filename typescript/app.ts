let message: string = "Help me, Obi-wan Kenobi. You're my only hope"
console.log(message)

let episode: number = 4
//episode = '4'
console.log("This is epispode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

let isEnoutghToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoutghToBeatMF(distance) ? 'YES' : 'NO'}`)
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R1')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}
console.log(`inc (5, 1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)