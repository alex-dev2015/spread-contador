var currentNumberWrapperOne = document.getElementById('currentNumberOne')
var currentNumberOne = 0;

var currentNumberWrapperTwo = document.getElementById('currentNumberTwo')
var currentNumberTwo = 0;

var buttonAddOne = document.getElementById('adicionarOne');
var buttonAddTwo = document.getElementById('adicionarTwo');
var buttonDelOne = document.getElementById('subtrairOne');
var buttonDelTwo = document.getElementById('subtrairTwo');

buttonAddOne.addEventListener('click', incrementOne);    

buttonDelOne.addEventListener('click', decrementOne);

buttonAddTwo.addEventListener('click', incrementTwo);

buttonDelTwo.addEventListener('click', decrementTwo);

function incrementOne() {
    currentNumberOne = currentNumberOne + 1;

    currentNumberWrapperOne.innerHTML = currentNumberOne;
    
    if (currentNumberOne == 10 ) {
        buttonAddOne.disabled = true;
    }

    if (currentNumberOne > 0) {
        buttonDelOne.disabled = false;
    }
    
}

function decrementOne() {
    if (currentNumberOne > 0 ) {
        currentNumberOne = currentNumberOne - 1;
        currentNumberWrapperOne.innerHTML = currentNumberOne;
        
    }else{
        buttonDelOne.disabled = true
    }

    if (currentNumberOne <= 10) {
        buttonAddOne.disabled = false;
    }

}


function incrementTwo() {
    currentNumberTwo = currentNumberTwo + 1;
    currentNumberWrapperTwo.innerHTML = currentNumberTwo;
    if (currentNumberTwo > 0) {
        currentNumberWrapperTwo.style.color = "#4A1096";
    }
    
}
function decrementTwo() {
    currentNumberTwo = currentNumberTwo - 1;
    currentNumberWrapperTwo.innerHTML = currentNumberTwo;
    if (currentNumberTwo < 0) {
        currentNumberWrapperTwo.style.color = "red";
    }

    
}