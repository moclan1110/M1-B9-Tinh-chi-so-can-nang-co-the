let weight = +prompt('Enter weight');
let height = +prompt('Enter height');
let bmi = weight/(height**2);
if(bmi < 18.5) {
    document.write('Underweight');
} else if(bmi < 25) {
    document.write('Normal');
} else if(bmi < 30) {
    document.write('overweight');
} else {
    document.write('obese');
}