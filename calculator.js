const onebtn    =   document.getElementById("one");
const twobtn    =   document.getElementById("two");
const threebtn  =   document.getElementById("three");
const addbtn    =   document.getElementById("add");
const fourbtn   =   document.getElementById("four");
const fivebtn   =   document.getElementById("five");
const sixbtn    =   document.getElementById("six");
const subtractbtn = document.getElementById("subtract");
const sevenbtn  =   document.getElementById("seven");
const eightbtn  =   document.getElementById("eight");
const ninebtn   =   document.getElementById("nine")
const multbtn   =   document.getElementById("times");
const zerobtn   =   document.getElementById("zero");
const decibtn   =   document.getElementById("dot");
const dividebtn =   document.getElementById("divide");
const equalsbtn =   document.getElementById("equals");
const clearbtn  =   document.getElementById("clean");
const display   =   document.getElementById("display");

let operand1 = "";
let operand2 = "";
let maxLength = 16;

let addbtnActive = false;
let subtractbtnActive = false;
let multbtnActive = false;
let dividebtnActive = false;

onebtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

twobtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

threebtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

fourbtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

fivebtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

sixbtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

sevenbtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

eightbtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

ninebtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

zerobtn.onclick = function() {
    if (display.textContent.length < maxLength) {
        if (display.textContent == "0") {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    }
}

decibtn.onclick = function() {
    display.textContent += this.textContent;
}

addbtn.onclick = function() {
    addbtnActive = true;
    subtractbtnActive = false;
    multbtnActive = false;
    dividebtnActive = false;

    operand1 = display.textContent;
    display.textContent = `${operand1}+`;
}

subtractbtn.onclick = function() {
    subtractbtnActive = true;
    addbtnActive = false;
    multbtnActive = false;
    dividebtnActive = false;

    operand1 = display.textContent;
    display.textContent = `${operand1}-`;
}

multbtn.onclick = function() {
    multbtnActive = true;
    addbtnActive = false;
    subtractbtnActive = false;
    dividebtnActive = false;

    operand1 = display.textContent;
    display.textContent = `${operand1}*`;
}

dividebtn.onclick = function() {
    dividebtnActive = true;
    addbtnActive = false;
    subtractbtnActive = false;
    multbtnActive = false;

    operand1 = display.textContent;
    display.textContent = `${operand1}/`;
}

function calculate() {
    if (addbtnActive) {
        display.textContent = `${Number(operand1) + Number(operand2)}`;
    } else if (subtractbtnActive) {
        display.textContent = `${Number(operand1) - Number(operand2)}`;
    } else if (multbtnActive) {
        display.textContent = `${Number(operand1) * Number(operand2)}`;
    } else if (dividebtnActive) {
        display.textContent = `${Number(operand1) / Number(operand2)}`;
    }
    operand1 = "";
    operand2 = "";
}

equalsbtn.onclick = function() {
    if (display.textContent.includes("+")) {
        operand2 = display.textContent.slice(display.textContent.indexOf("+") + 1);
        calculate();
    } else if (display.textContent.includes("-")) {
        operand2 = display.textContent.slice(display.textContent.indexOf("-") + 1);
        calculate();
    } else if (display.textContent.includes("*")) {
        operand2 = display.textContent.slice(display.textContent.indexOf("*") + 1);
        calculate();
    } else if (display.textContent.includes("/")) {
        operand2 = display.textContent.slice(display.textContent.indexOf("/") + 1);
        calculate();
    }
}

clearbtn.onclick = function() {
    operand1 = "";
    operand2 = "";
    display.textContent = "0";
}
