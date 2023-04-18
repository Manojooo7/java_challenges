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
 

 




// console.log(markBMI,johnBMI);