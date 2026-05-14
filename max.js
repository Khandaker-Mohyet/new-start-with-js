const jim = 256;
const tim = 242;
const kim = 168;

if(jim>tim && jim>kim){
    console.log("Jim is the ultimate boss")
}else if(tim>jim && tim>kim){
    console.log("Tim is the main boss")
}else{
    console.log("kim is the big boss")
}

const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    console.log(numbers)
}

const max = getMax(heights);
console.log('max value is', max)