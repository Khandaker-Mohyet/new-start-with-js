const kacci = ["akbar", "ckbar", "nkbar", "akbar", "lkbar", "ckbar", "nkbar"];

const numbers = [1, 3, 2, 4, 3, 4, 5, 4, 5]

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}

const uniqueArray= noDuplicate(numbers)
console.log(uniqueArray)