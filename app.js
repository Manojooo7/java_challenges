const markWeights = 78
const johnWeights = 92
const markHeight = 1.69
const johnHeight = 1.69

const markBMI =  Math.floor(markWeights / markHeight * 2)
const johnBMI = Math.floor(johnWeights / johnHeight * 2)

const comparison = markBMI > johnBMI

console.log(comparison);

// console.log(markBMI,johnBMI);
 
if (markBMI > johnBMI) {
    console.log(`Mark has BMI of (${markBMI}) which is higher then John BMI`);
}
else if (johnBMI > markBMI) {
    console.log(`John has BMI of (${johnBMI}) which is higher then Mark BMI`);
}
else if (johnBMI === markBMI) {
    console.log("Both BMI are Equal");
}else{
    console.log("Not Satisfied any condition");
}
 

/* switch statement */

const day= 'thursday';

switch (day) {
    case 'monday': // day === moday
        console.log('Plan to study maths');
        break;
    case 'tuesday':
        console.log('Need to go to gym');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('wirte code');
        break;
    case 'friday':
        console.log('watching course videos');
        break;
    default:
        console.log('Invalid Day');
        break;
}

// Challenge 4 conditional operetor

const bill = 200;
// coditional ternary operetor
const tip = bill >= 50 && bill <= 300 ? bill * 15 /100 : bill * 20 /100;
const totalAmount = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip} and the total amount is ${totalAmount}`);





// console.log(markBMI,johnBMI);