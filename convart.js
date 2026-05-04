function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    return feetNumber
}

const myHeight = inchToFeet2(68)
console.log(myHeight)