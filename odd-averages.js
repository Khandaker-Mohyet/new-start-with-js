const numbers = [45, 23, 66, 76, 23, 46]
const odds = []

function oddAverage (numbers){
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number)
        }
    }
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    const avrage = sum/count
    console.log(avrage)
}

const avg = oddAverage(numbers);

// console.log(avg)