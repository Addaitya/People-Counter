// Stores value of counter
let counter=0;

// access digits

let digits = document.querySelector('.screen');

// access add subtract button
let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');


addBtn.addEventListener('click', () => {

    counter = (counter + 1) % 1000;

    updateDigitValues();
    
});


subtractBtn.addEventListener('click', ()=> {

    if(counter > 0){

        counter--;

        updateDigitValues();
    }
})

// Updates the digit values on html page after increment or decrement of counter variable
function updateDigitValues(){

    // We will extract each digit from this integer
    let setDigits = counter;

    // store collection of element of digit
    let digitCollection = digits.children;

    // iterate through zero's digit to hundred's digit
    for (let i= digits.children.length-1; i >= 0; i--){

        digitCollection[i].textContent = setDigits % 10;  // gives last digit of counter
        setDigits = Math.trunc(setDigits/10);  // eleminates last digit
    }
}