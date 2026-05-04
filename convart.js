function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const resutl = feetNumber + ' ft ' + inchRemaining + " inch "
    return resutl;
}

const myHeight = inchToFeet2(68)
// console.log(myHeight)

// mile to kilomiter

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilometer(1000))