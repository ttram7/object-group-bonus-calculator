// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// ## Data Structure

// The company is providing you with a few samples of employee data of how their data is currently being stored. Each are stored in a global array named `employees`.

// ### Employee Array 
// Each **Employee** currently is configured in this way:

// * The `name` property holds the employee's name.
// * The `employeeNumber` property has their employee number.
// * The `annualSalary` property contains their base annual salary.
// * The `reviewRating` property contains their review rating.


// ## A Loop to Process Bonuses

// Loop over the `employees` array and do the following:

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
//     - The `log` should be in the loop, not the function.

// ## The Bonus Calculation Function

// Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.



// This function will calculate 1 employee's bonus!
//


//person.push(employees.name);
// let per = [];
// for (let i=0; i<employees.length; i++) {
//   per[i] = {
//     name: employees.name,
//     bonusPercentage: [] * 100,
//     totalCompensation: [],
//     totalBonus: [],
//   }
//   console.log(per[i]);
// }
let bonusPercentage = 0;
let person = {};

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  for (let i=0; i<employee.length; i++){
    person.name = employee[i].name;
    if (employee[i].reviewRating <= 2){
      bonusPercentage = 0;
    } if (employee[i].reviewRating == 3){
      bonusPercentage = .04;
    } if (employee[i].reviewRating == 4){
        bonusPercentage = .06;
      } if (employee[i].reviewRating == 5){
        bonusPercentage = .1;
      }
      if (parseInt(employee[i].employeeNumber) < 10000){
        bonusPercentage += .05;
      } if (parseInt(employee[i].annualSalary) > 65000){
        bonusPercentage -= .01;
      } if (bonusPercentage > .13){
        bonusPercentage = .13;
      } if (bonusPercentage < 0){
        bonusPercentage = 0;
    } 
    person.bonusPercentage = `${bonusPercentage * 100}%`;
    person.totalBonus = Math.round(parseInt(employee[i].annualSalary) * bonusPercentage);
    person.totalCompensation = parseInt(employee[i].annualSalary) + person.totalBonus;
    console.log(person);
    } 
  }

calculateIndividualEmployeeBonus(employees);

//let totalCompensation = 0;

// for (let i=0; i<employees.length; i++){
//   console.log(`compensation ${totalCompensation} = percentage ${employees[i].bonusPercentage} * salary ${employees[i].annualSalary}`);
// }