/**
 * Alvin Naufal
 */
function trafficLight(color) {
    const msg_input = "please insert color"
    const msg_invalid = "color invalid"

    // Type checking
    if (typeof color !== "string") 
        return
    
    switch (color) {
        case "":
            return msg_input
        case "red":
            return "stop"
        case "orage": // Typo "orage"
            return "careful"
        case "green":
            return "go"
        default:
            return msg_invalid
    }
}

// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orage")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color