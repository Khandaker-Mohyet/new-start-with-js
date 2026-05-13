const numbers = [45, 23, 66, 76, 23, 46]
const odds = []

function oddAverage (numbers){
    for (const number of numbers){
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number)
        }
    }
    console.log(odds)
}

const avg = oddAverage(numbers);

console.log(avg)