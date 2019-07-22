function calculate()
{
        var x = parseFloat(document.getElementById('numberin1').value);
        var y = parseFloat(document.getElementById('numberin2').value);
        var operator = document.getElementById('operator').value;

        window.alert("The answer is: " + operate(value1, value2, operator));
}


function operate(value1, value2, operator)
{
        if (operator == 'addition') {
                return value1 + value2;
        } else if (operator == 'subtraction') {
                return value1 - value2;
        } else if (operator == 'division') {
                return value1 / value2;
        } else if (operator == 'multiplication') {
                return value1 * value2;
        }
}
