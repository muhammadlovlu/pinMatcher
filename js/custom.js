// generating Pin for verification
function getPin() {
    const random = Math.random() * 100000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 5) {
        return pin;
    }
    else {
        return getPin();
    }
}


// diplaying pin on an input  field
function generatePin() {
    const pinInput = document.getElementById('display-pin');
    pinInput.value = getPin();
}


// handle button  event 
document.getElementById('digits-container').addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {

        // handle backspace

        if (digit === 'C') {
            const pinInput = document.getElementById('pin');
            pinInput.value = '';
        }
    }
    else {
        const pinInput = document.getElementById('pin');
        pinInput.value = pinInput.value + digit;
    }
})


// verify Pin 
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('pin').value;
    if (pin === typedPin) {
       matchResult('block' , 'none');

    }
    else {
       matchResult('none', 'block');
    }
}
function matchResult(correctStatus, incorrectStatus){
    const correct = document.getElementById('correct-pin');
        correct.style.display = correctStatus;
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = incorrectStatus;
}