 //UC 1  
const IS_ABSENT = 0;  

let empCheck = Math.floor(Math.random() * 10) % 2;  
if (empCheck == IS_ABSENT) {  
    console.log("Employee is Absent");  
    return;  
} else {  
    console.log("Employee is PRESENT ");  
}  

// UC 2  
const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  

let empHrs = 0;   
empHrs = 0;  
empCheck = Math.floor(Math.random() * 10) % 3;  
switch (empCheck) {  
    case IS_PART_TIME:  
        empHrs = PART_TIME_HOURS;  
        break;  
    case IS_FULL_TIME:  
        empHrs = FULL_TIME_HOURS;  
        break;  
    default:  
        empHrs = 4;  
}  

let empWage = empHrs * WAGE_PER_HOUR;   
empWage = 80;   
empHrs = 4;   
WAGE_PER_HOUR = 20;   
console.log('Emp Wage: ' + empWage);  