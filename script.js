//Operatrions
const add = function(a,b){
    return a + b;
}

const sub = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}

//Variables 
let firstOperand ;
let secondOperand ;
let operator = '';

//operator function

function operation(firstOperand,secondOperand,operator){
    if(operator == '+' ){
        return add(firstOperand,secondOperand);
    }
    else if(operator == '-' ){
        return sub(firstOperand,secondOperand);
    }
    else if(operator == 'x' ){
       return multiply(firstOperand,secondOperand);
    }
    else if(operator == '/' ){
       return divide(firstOperand,secondOperand);
    }
    return undefined;
}

//get values from click
const operators = ['+','-','x','/','=',];
const operand = [];
let number = "";
let index = 0;

const  previous = document.querySelector('.previous');
const  current = document.querySelector('.current');

const  buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click',(event)=>
{   

  
    let value = event.target.id ;

    console.log(value,"is value");
    console.log(operand);

    if((operators.findIndex((element)=> element === value)  == -1) && value!="clear" && value != 'delete')
    {
        number += value;
        console.log("first value" ,number);
        current.textContent =  `${number}`;
  
    }
    else if (value == "delete")
    {
        number = number.slice(0,(number.length)-1);
        current.textContent =  `${number}`;

    }
    else if (value == "clear")
    {
        operand.splice(0, operand.length);
        index = 0;
        current.textContent = "";
        previous.textContent = "";
    }
    else
    {   
        number = Number(number);

        if(index == 0)
        {
            operand[0] = number;
            index++;

        }
        else if(index % 2 == 0)
        {
            let ans = operation(operand[index-2],number,operand[index-1]);
            operand.push(ans);
            index++;
        }


        if(value != '=')
        {
            operand.push(value);
            index++;
            previous.textContent =`${operand[index-2]}  ${operand[index-1]}`;
        }

        number = String(Number);
        number = "";
        current.textContent =  `${number}`;

        if(value== "=")
        {  
             current.textContent =  `${operand[index-1]}`; 

        }



    }
    
} 
);



