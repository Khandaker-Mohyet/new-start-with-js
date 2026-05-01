const numbers = [5, 8, 3, 4, 9, 1]
// console.log(numbers)
numbers.sort()
// console.log(numbers)

const ages = [13, 5, 55, 81, 35, 43, 9, 1]
// asending
// const sortedAge = ages.sort(function (a, b) { return a - b });
// descending
const sortedAge = ages.sort(function (a, b) { return b - a });
console.log(sortedAge)