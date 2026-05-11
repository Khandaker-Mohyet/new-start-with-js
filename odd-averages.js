const numbers = [45, 23, 66, 76, 23, 46]

function oddAverage (numbers){
    for (const number of numbers){
        if(number % 2 === 1){
            console.log(number)
        }
    }
}

const avg = oddAverage(numbers);

console.log(avg)