document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentValue = '';
    let operator = '';  
    let previousValue = '';  
    display.value = '0'

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

           
            if (button.id === 'clear') {
                currentValue = '';
                previousValue = '';
                operator = '';
                display.value = '';
            } 
           
            else if (button.id === 'equals') {
                if (previousValue && operator && currentValue) {
                    const result = calculate(parseFloat(previousValue), parseFloat(currentValue), operator);
                    display.value = result;
                    previousValue = result.toString();  
                    currentValue = '';
                    operator = '';
                }
            } 
             
            else if (button.classList.contains('operator')) {
                if (currentValue) {
                    operator = value;
                    previousValue = currentValue;
                    currentValue = '';
                }
            } 
            
            else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    });

    // Function to perform basic calculations
    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a / b : 'Error';  
            default:
                return 0;
        }
    }
});
