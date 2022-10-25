// array of employee objects
console.log( 'js' );

$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );

    $( "#runBonus" ).click(function() {
      if (doThing) {
        printBonus(arrOfBonusDetails);
        doThing = false;
        document.getElementById("runBonus").style.visibility="hidden";
      }

    });

}   //end readyNow

function printBonus(array) {
  for (let employee of array) {
    $("ul").append('<h3>Name: ' + employee.name + '</h3>')
    $("ul").append('<li>Bonus Percentage: ' + (employee.bonusPercentage * 100) + '%</li>')
    $("ul").append('<li>New Total Compensation: ' + employee.totalCompensation + '</li>')
    $("ul").append('<li>Total Bonus: ' + employee.totalBonus + '</li>')
  }

}

let doThing = true;

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

for (let employee of employees) {
  console.log(employee);
}

// This function creates a new employee object and calculates the new salary
function calculateNewSalary( employee ) {  

  let bonusPercentage = calculateBonusPercentage(employee); // function to calculate full bonus percentage
  let bonusDetails = {
    name: employee.name,
    bonusPercentage: bonusPercentage, // returned from function
    totalCompensation: Math.round(employee.annualSalary * (1 + bonusPercentage)), // round to nearest dollar
    totalBonus: Math.round(employee.annualSalary * bonusPercentage) // round to nearest dollar
  }
  
  return bonusDetails;
}

// This function calculates the bonus percentage
function calculateBonusPercentage(employee){
  let bonusPercentage = 0;

  // 4-digit employee number = 15-year tenure = 5% bonus
  if (employee.employeeNumber.length === 4){
    bonusPercentage += 0.05;
  }

  // >65k salary = 1% deduction from bonus
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
  }

  // Bonuses based on review ratings
  switch (employee.reviewRating) {
    case 3:
      bonusPercentage += 0.04;
      break;
    case 4:
      bonusPercentage += 0.06;
      break;
    case 5:
      bonusPercentage += 0.10;
      break;
    default:
      break;
  }

  // Bonuses cannot be higher than 13% or lower than 0%
  if (bonusPercentage > 0.13) { bonusPercentage = 0.13 };
  if (bonusPercentage < 0) { bonusPercentage = 0 };

  return bonusPercentage;
}

let arrOfBonusDetails = [];
for (let i = 0; i<employees.length; i++){
  arrOfBonusDetails.push(calculateNewSalary(employees[i]));
}