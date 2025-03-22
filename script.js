let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function toggleSign() {
    let display = document.getElementById('display');
    display.value = display.value ? -parseFloat(display.value) : '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Invalid expression');
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value) || 0;
}
