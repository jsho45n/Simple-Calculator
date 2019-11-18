function addNumber(char) {
    var display = document.getElementById("result");
    display.value = display.value + char;
}

function calculate() {
    var display = document.getElementById("result");
    var result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('result').value = "";
}