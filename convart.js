function inchToFeet(inc){
    const feet = inch / 12;
    return feet;
}

const myHeight = inchToFeet(68)
console.log(myHeight)