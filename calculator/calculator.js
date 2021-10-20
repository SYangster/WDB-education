let total = 0;
let strbuffer = "0";
let operator = null;
let after_operator = false;

function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total += intBuffer;
    }
    if (operator === "x") {
        total *= intBuffer;
    }
    if (operator === "-") {
        total -= intBuffer;
    }
    if (operator === "÷") {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        if (after_operator) {
            strbuffer = value;
        } else {
            strbuffer += value;
        }
        after_operator = false;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0";
    } else if (symbol === "←") {
        strbuffer = strbuffer.substring(0, strbuffer.length-1);
    } else if (symbol === "=") {
        calculations();
        strbuffer = parseInt(total);
    } else { 
        const intBuffer = parseInt(strbuffer);
        total = intBuffer;
        operator = symbol;
        after_operator = true;
    }
}

function setListeners() {
    let buttons = document.querySelectorAll(".buttons"); 
    for (item of buttons) {
        item.addEventListener("click", function(event) {
            buttonClicked(event.target.innerText);
        });
    }
}

setListeners()

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { 
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerHTML = strbuffer;
}

