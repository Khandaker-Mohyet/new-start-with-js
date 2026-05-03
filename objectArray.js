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
    console.log(employee.designation)
}

// array of array

// examMarks[1][4]

// copy

const products = [25, 25, 25]
const comp_products = products;

comp_products[0] = 15;

console.log(products);
console.log(comp_products);