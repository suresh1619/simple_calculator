
    // Function to update the display value
    function updateDisplay(value) {
        var display = document.getElementsByName("display")[0];
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        var display = document.getElementsByName("display")[0];
        display.value = '';
    }

    // Function to perform the calculation
    function calculateResult() {
        var display = document.getElementsByName("display")[0];
        display.value = eval(display.value);
    }
    function deleteLastCharacter() {
        var display = document.getElementsByName("display")[0];
        display.value = display.value.slice(0, -1);
    }
