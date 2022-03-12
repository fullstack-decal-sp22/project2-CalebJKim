let total = 0;
let strbuffer = "0";
let operator = null;

function calculations() {
    const intBuffer = parseInt(strbuffer);
    if (operator === "+") {
        total += intBuffer;
    } else if (operator == "-") {
        total -= intBuffer;
    } else if (operator == "x") {
        total *= intBuffer;
    } else {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    // console.log(strbuffer + " init");
    if (strbuffer === "0") {
        strbuffer = value;
        // console.log(strbuffer + " condition 0");
    } else {
        strbuffer += value;
        // console.log(strbuffer + " condition not 0");
    }
    // console.log(strbuffer + " end res");
}

function makesSymbol(symbol) {
    if (symbol == "C") {
        total = 0;
        strbuffer = 0;
    } else if (symbol == "←") {
        if (strbuffer.length == 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1); //FIXED shouldn't be able to delete when display is just "0"
        }
    } else if (symbol == "=") {
        calculations();
        strbuffer = total;
        total = 0;
        operator = null;
    } else {
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total = intBuffer;
        } else {
            calculations();
        }
        operator = symbol;
        strbuffer = 0;
    }
}

function setListeners() {
    let listeners = document.querySelectorAll(".buttons");
    // onclick = function(event) {
    //     buttonClicked(event.target.innerText);
    // }
    for (item of listeners) {
        item.addEventListener("click", function(event) { //Anonymous function
            buttonClicked(event.target.innerText);
        })
    }
}

setListeners();

function buttonClicked(valueClicked) {
    console.log(valueClicked);
    if (isNaN(parseInt(valueClicked))) {
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerText = strbuffer;
}