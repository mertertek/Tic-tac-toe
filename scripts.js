function buttonValue(val) {
    document.getElementById("result").value += val;
}

function calculate() {
    try {
        let displayValue = document.getElementById("result").value;
        let result = eval(displayValue);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function clearr() {
    document.getElementById("result").value = "";
}
