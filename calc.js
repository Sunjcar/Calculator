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
const btnEqual = document.getElementById('=');
const btnClear = document.getElementById('clear');
const operator = document.querySelectorAll('.operator');
const btnDot = document.getElementById('.');
const btnDelete = document.getElementById('delete')

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
btnClear.addEventListener('click',reset);
btnDot.addEventListener('click',clickListener);
btnDelete.addEventListener('click',deleteNumber);

   
let storedNum = '';
let clickedOperator = ' ';
let firstNumber = '';
let result = '';
inputOne.textContent = '';
inputTwo.textContent = '';
let currentOperation = null

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
    if (b === 0 ){
    return "It's always 0!" 
    }else
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
    if (event.target.id ==='.'){
        btnDot.setAttribute('disabled',1)
    }
    storedNum += event.target.id
    inputOne.textContent = storedNum;
    }
//Stores initial input and takes operator input
function Operator(event){
    if (firstNumber && storedNum ) {
        results();
        }   
  storedNum = inputOne.textContent;
  firstNumber = storedNum;
  inputTwo.textContent = storedNum;
  clickedOperator = event.target.id;
  storedNum = '';
  inputTwo.textContent = firstNumber + ' ' +clickedOperator;
  
  btnDot.removeAttribute('disabled')  
}

 //Calls function corresponding to the operator clicked and returns value.
 function results(){
     if (firstNumber === '' || storedNum === '' || clickedOperator === ''){
         return;
     }
  const result = operate(parseFloat(firstNumber),parseFloat(storedNum),clickedOperator);
    inputOne.textContent = result; 
    inputTwo.textContent = firstNumber + ' ' +clickedOperator + ' '+ storedNum;
    storedNum = result; 
    storedNum = '';
    firstNumber = '';

    btnDot.removeAttribute('disabled')
}
//Resets textContent
function reset(){
    storedNum='';
    firstNumber = '';
    inputOne.textContent = '';
    inputTwo.textContent = '';  
    btnDot.removeAttribute('disabled')
}

//Delete Button
function deleteNumber() {
    btnDot.removeAttribute('disabled')
    
    if(inputTwo.textContent === ''){
        return inputOne.textContent = inputOne.textContent.toString().slice(0,-1) ;
    }else 
        return inputTwo.textContent = inputTwo.textContent.toString().slice(0,-1);
 } 
//Keyboard support numbers and operators 
  window.addEventListener('keydown', function(e) {
    let button = document.getElementById(e.key);
    const keyName = e.key;
    e.preventDefault();
    if(keyName === 'Escape') {
      reset();
    }
  
    if(keyName === 'Backspace') {
      deleteNumber();
    }
    if(keyName === 'Enter' || (keyName === '=' && firstNumber != '' && storedNum != '')) {
      results();
    }
    if(button === null){
        button = document.querySelector(`[data-alt='${e.key}'`)   
    }
    button.click();
});

