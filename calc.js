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
const btnAdd = document.getElementById('+');
const btnMult = document.getElementById('*');
const btnSub = document.getElementById('-');
const btnDivide = document.getElementById('/');
const btnEqual = document.getElementById('=')
const btnClear = document.getElementById('clear')
const operator = document.querySelectorAll('.operator')

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
btnAdd.addEventListener('click',Operator);
btnMult.addEventListener('click',Operator);
btnSub.addEventListener('click',Operator);
btnDivide.addEventListener('click',Operator);
btnEqual.addEventListener('click', results);
btnClear.addEventListener('click',reset)

let storedNum = '';
let clickedOperator = ' '
let firstNumber = '';
let result = '';
inputOne.textContent = ' ';
inputTwo.textContent = ' ';


//add function
function add(a,b){
   let x = a + b;
       return x;

};

//subtract function
function sub(a,b){
    let x = a - b;
    return x;
};

//multiply function
 function multiply(a,b){
    let x = a * b;
    return x;
};

//divide function
function divide(a,b){
    let x = a / b;
    return x;
};

//Calls one of the functions above
function operate(a,b,clickedOperator){
    if (clickedOperator === "+"){
       return add(a,b);
    } else if (clickedOperator === "-"){
       return sub(a,b);
    } else if (clickedOperator === "*"){
       return multiply(a,b)
    } else if (clickedOperator === "/"){
        return divide(a,b)
    }
}
//Takes initial user input via # button
function clickListener(event){
    storedNum = event.target.id; 
    inputOne.textContent = storedNum;
}

//Stores initial input and takes operator input
function Operator(event){
  firstNumber = storedNum;
  clickedOperator = event.target.id;
  operator.textContent = clickedOperator; 
  inputOne.textContent = operator.textContent
  storedNum = '';
}

 //Calls function corresponding to the operator clicked and returns value.
 function results(){
   result = operate(parseFloat(firstNumber),parseFloat(storedNum),clickedOperator);
    inputOne.textContent = result; 
    storedNum = result;
}

//Resets textContent
function reset(){
    inputOne.textContent = ' ';
    inputTwo.textContent = ' '; 
}