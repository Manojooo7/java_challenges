// const markWeights = 78
// const johnWeights = 92
// const markHeight = 1.69
// const johnHeight = 1.69

// const markBMI =  Math.floor(markWeights / markHeight * 2)
// const johnBMI = Math.floor(johnWeights / johnHeight * 2)

// const comparison = markBMI > johnBMI

// console.log(comparison);

// // console.log(markBMI,johnBMI);
 
// if (markBMI > johnBMI) {
//     console.log(`Mark has BMI of (${markBMI}) which is higher then John BMI`);
// }
// else if (johnBMI > markBMI) {
//     console.log(`John has BMI of (${johnBMI}) which is higher then Mark BMI`);
// }
// else if (johnBMI === markBMI) {
//     console.log("Both BMI are Equal");
// }else{
//     console.log("Not Satisfied any condition");
// }
 

// /* switch statement */

// const day= 'thursday';

// switch (day) {
//     case 'monday': // condition
//         console.log('Plan to study maths'); // if the above condition satisfied then run this block of code
//         break; // if the above code is run the don't run below code
//     case 'tuesday':
//         console.log('Need to go to gym');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code');
//         break;
//     case 'friday':
//         console.log('watching course videos');
//         break;
//     default:
//         console.log('Invalid Day');
//         break;
// }

// Challenge 4 conditional operator

// const bill = 200;
// conditional ternary operator

// const tip = bill >= 50 && bill <= 300 ? bill * 15 /100 : bill * 20 /100;
// const totalAmount = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total amount is ${totalAmount}`);


// console.log(markBMI,johnBMI);


// for loop
// for loop keep running while condition is true

// for ( initial value; condition; increment){
//     block of code 
// }

// example
// for (let rep = 0; rep <=30; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
// }

// loop through object

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = []

// for (let i= 0; i < jonas.length; i++){
    // Reading from jonas array
    // console.log(jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    // types.push(typeof jonas[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969,2020];
// const ages = [];

// for(let i =0; i < years.length; i++){
//     ages.push(2023- years[i])
// }

// console.log(ages);

// continue and break statement

// continue
// for (let i= 0; i < jonas.length; i++){
//     // Reading from jonas array
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i] ,typeof jonas[i])
// }

// break
// for (let i= 0; i < jonas.length; i++){
//     // Reading from jonas array
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i] ,typeof jonas[i])
// }


// looping backward
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// lopping from 4,3,2,1
// for(let i = jonas.length-1; i >= 0; i--){
//     console.log( i, jonas[i]);
// }


// loop inside loop
// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`------------ Starting exercise ${exercise}`
//     );

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }


// While Loop

    // for loop
// for (let rep = 0; rep <=10; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
// }

    // While loop

// let rep = 1;

// while(rep <=10){
//     console.log(`WHILE: Lifting weight repetition ${rep}`);
//     rep++;
// };

// let dice = Math.floor(Math.random() * 6)+1
// console.log(dice);

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.floor(Math.random() * 6)+1;
//     if(dice === 6)console.log('Loop is About to end....');
// }

// Fundamental coding challenge 4

const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const total = [];
const calcTip = function (bill){
    return bill >= 5 && bill <= 300 ? bill * 0.15 : bill *0.2;
}

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);

}

console.log(bills,tips, total);

