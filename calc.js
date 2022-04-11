const btnOne = document.getElementById('1');
const btnTwo = document.getElementById('2');
const btnThree = document.getElementById('3')
const btnFour = document.getElementById('4');
const btnFive = document.getElementById('5');
const btnSix = document.getElementById('6');
const btnSeven = document.getElementById('7');
const btnEight = document.getElementById('8');
const btnNine = document.getElementById('9');
const btnZero = document.getElementById('0');

btnOne.addEventListener('click',clickListener);
btnTwo.addEventListener('click',clickListener);
btnThree.addEventListener('click',clickListener);
btnFour.addEventListener('click',clickListener);
btnFive.addEventListener('click',clickListener);
btnSix.addEventListener('click',clickListener);
btnSeven.addEventListener('click',clickListener);
btnEight.addEventListener('click',clickListener);
btnNine.addEventListener('click',clickListener);
btnZero.addEventListener('click',clickListener);

let num1 = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
inputOne.textContent = 0;



//add function
function add(a,b){
   let x = a + b;
       return x;

};console.log(add(3,5));

//subtract function
function sub(a,b){
    let x = a - b;
    return x;
}console.log(sub(9,2))

//multiply function
 function multiply(a,b){
    let x = a * b;
    return x;
}  console.log(multiply(8,4))

//divide function
function divide(a,b){
    let x = a / b;
    return x;
};console.log(divide(10,3))

//Calls one of the functions above
function operate(a,b,operator){
    if (operator === "+"){
        add(a,b);
    } else if (operator === "-"){
        sub(a,b);
    } else if (operator === "*"){
        multiply(a,b)
    } else if (operator === "a/b"){
        divide(a,b)
    }
}

function clickListener(event){
    let x = event.target.id;
    inputOne.textContent = x;
    num1 = inputOne.textContent;
}
