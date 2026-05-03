const employees = [
  {
    name: "Rahim Ahmed",
    designation: "Frontend Developer",
    salary: 40000
  },
  {
    name: "Karim Hasan",
    designation: "Backend Developer",
    salary: 50000
  },
  {
    name: "Nusrat Jahan",
    designation: "UI/UX Designer",
    salary: 35000
  },
  {
    name: "Tanvir Hossain",
    designation: "Project Manager",
    salary: 60000
  },
  {
    name: "Sadia Islam",
    designation: "QA Engineer",
    salary: 30000
  }
];

// console.log(employees[4].salary)

for(const employee of employees){
    // console.log(employee.designation)
}

// array of array

// examMarks[1][4]

// copy

const products = [25, 25, 25]
// const comp_products = products;
const comp_products = [];

for(product of products){
  comp_products.push(product)
}

comp_products[0] = 15;

// console.log(products);
// console.log(comp_products);

// another

let price = 25;
let comp_price = price;

price = 12;

// console.log(price);
// console.log(comp_price);

const numbers = [1, 2, 3, 4]
// const new_numbers = Array.from(numbers);
const new_numbers = [...numbers]

new_numbers.push(8);

console.log(numbers)
console.log(new_numbers)
