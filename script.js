function calculateExpression() {
    const expression = document.getElementById('expression').value;
    const result = calculate(expression);
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
    resultElement.classList.add('show-result');
}

function calculate(expression) {
    let numbers = expression.match(/\d+(\.\d+)?/g);
    let operators = expression.match(/[\+\-\*\/]/g);

    if (!numbers || !operators || operators.length >= numbers.length) {
        return 'Invalid expression';
    }

    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operators.length; i++) {
        let num = parseFloat(numbers[i + 1]);
        let operator = operators[i];

        if (isNaN(num)) {
            return 'Invalid expression';
        }

        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                if (num === 0) {
                    return 'Division by zero';
                }
                result /= num;
                break;
            default:
                return 'Invalid operator';
        }
    }

    return result;
}
