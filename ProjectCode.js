// UC 1  
const IS_ABSENT = 0;  

let empCheck = Math.floor(Math.random() * 10) % 2;  
if (empCheck === IS_ABSENT) {  
    console.log("Employee is Absent");  
} else {  
    console.log("Employee is PRESENT");  
}  

// UC 2  
const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  

let empHrs = 0;   
empCheck = Math.floor(Math.random() * 10) % 3;  
switch (empCheck) {  
    case IS_PART_TIME:  
        empHrs = PART_TIME_HOURS;  
        break;  
    case IS_FULL_TIME:  
        empHrs = FULL_TIME_HOURS;  
        break;  
    default:  
        empHrs = 0; // Default for absent  
}  

let empWage = empHrs * WAGE_PER_HOUR;  
console.log('Emp Wage: ' + empWage);  

// UC 3  
function getWorkingHours(empCheck) {  
    switch (empCheck) {  
        case IS_PART_TIME:  
            return PART_TIME_HOURS;  
        case IS_FULL_TIME:  
            return FULL_TIME_HOURS;  
        default:  
            return 0;  
    }  
}  

empCheck = Math.floor(Math.random() * 10) % 3;  
empHrs = getWorkingHours(empCheck);  

empWage = empHrs * WAGE_PER_HOUR;  
console.log('Emp Wage: ' + empWage);  

// UC 4  
const NUM_OF_WORKING_DAYS = 2;  
empHrs = 0;  
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {  
    empCheck = Math.floor(Math.random() * 10) % 3;  
    empHrs += getWorkingHours(empCheck);  
}  

empWage = empHrs * WAGE_PER_HOUR;  
console.log('Total Hrs: ' + empHrs + ' Emp Wage: ' + empWage);  

// UC 5  
const MAX_HRS_IN_MONTH = 100;  
const NUM_OF_WORKING_DAYS_MONTH = 20; // Avoid any confusion with previous variable  
let totalEmpHrs = 0;  
let totalWorkingDays = 0;  

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS_MONTH) {  
    totalWorkingDays++;  
    empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck); // Use the defined function here  
}  

empWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("UC 5: Total Days: " + totalWorkingDays + " Total Emp Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);  

// While Loop Statement  
let dogs = ['Bulldog', 'Beagle', 'Labrador'];  
let allDogs = [];  
let i = 0; // Initialize i before using it  
while (i < dogs.length) {  
    allDogs.push(dogs[i]);  
    i++;  
}  
console.log('While: ' + allDogs);  

// UC 6 Arrays  
function calcDailyWage(empHrs) {  
    return empHrs * WAGE_PER_HOUR;  
}  

const MAX_HRS_IN_MONTH_ARRAY = 160;  
const NUM_OF_WORKING_DAYS_ARRAY = 20;  
totalEmpHrs = 0;  
totalWorkingDays = 0;  
let empWageArr = [];  

while (totalEmpHrs < MAX_HRS_IN_MONTH_ARRAY && totalWorkingDays < NUM_OF_WORKING_DAYS_ARRAY) {  
    totalWorkingDays++;  
    empCheck = Math.floor(Math.random() * 10) % 3;  
    let empHrsForDay = getWorkingHours(empCheck);  
    totalEmpHrs += empHrsForDay;  
    empWageArr.push(calcDailyWage(empHrsForDay));  
}  

let totalEmpWage = empWageArr.reduce((acc, wage) => acc + wage, 0);  
console.log("UC 6: Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Emp Wage: " + totalEmpWage);  

// Array Helper Functions  

// UC 7A - Calculate total wage using Array forEach traversal or reduce method  
let totalEmpWage = 0;  
function sum(dailyWage) {  
    totalEmpWage += dailyWage;  
}  

empWageArr.forEach(sum);  
console.log("UC7A - Total Days: " + totalWorkingDays +   
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);  

function totalWages(dailyWage) {  
    return totalEmpWage += dailyWage;  
}  
console.log("UC7B - Emp Wage with reduce: " +   
            empWageArr.reduce(totalWages, 0));  

// UC 7B - Show the Day along with Daily Wage using Array map helper function  
function dailyCnt(dailyWage) {  
    console.log(dailyWage);  
}  

let mapDailyWage = empWageArr.map(dailyCnt);  
console.log("UC7B - Daily Wage Map: ");  
console.log(mapDailyWage);  

// UC 7C - Show Days when full time wage of 160 were earned  
function fullTime(dailyWage) {  
    return dailyWage.includes(160);  
}  
console.log("UC7C - Daily Wage Filter when Fulltime Wage Earned");  
console.log(empWageArr.filter(fullTime));  

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function  
function findFullTimeWage(dailyWage) {  
    return dailyWage.includes("160");  
}  

console.log("UC 7D - First time Full Time Wage was earned on Day: " +   
            mapDailyWageArr.find(findFullTimeWage));  

// UC 7E - Check if Every Element of Full Time Wage is truly holding full time wage  
function isAllFullTimeWage(dailyWage) {  
    return dailyWage.includes("160");  
}  
console.log("UC 7E - Check All Element have Full Time Wage: " +   
            fullDayWageArr.every(isAllFullTimeWage));  

// UC 7F - Check if there is any Part Time Wage  
function isAnyPartTimeWage(dailyWage) {  
    return dailyWage.includes("80");  
}  
console.log("UC 7F - Check If Any Part Time Wage: " +   
            empDailyWageArr.some(isAnyPartTimeWage));  

// UC 7G - Find the number of days the Employee Worked  
function totalDayWorked(numOfDays) {  
    return numOfDays + 1;  
}  
let numOfDays = 0;  
empDailyWageArr.reduce(totalDayWorked, 0);  
console.log("UC 7G - Number of Days Emp Worked: " + numOfDays);  