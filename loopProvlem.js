// ফর লুপ দিয়ে এরের মধ্যে যতগুলো উপাদান আছে সেইগুলা বের করা।

const fruits = ['Apple', 'Banana', 'Anar', 'Watermelon', 'Daav']

// console.log(fruits[i])

for(let i=0; i<fruits.length; i++){
    // console.log(i)
    // console.log(fruits[i])
}

const numbers = [12, 34, 347, 56, 23, 7,8 ,43]

for (let m = 0; m<numbers.length ; m++){
    // console.log(numbers[m])
}

let k = 0;

while(k<numbers.length){
    console.log(numbers[k])
    k++
}

for(num of numbers){
    console.log(num)
}