function addNumbers() {
    // Get the values of the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
    } else {
        // Calculate the sum
        const sum = num1 + num2;
        // Display the result
        document.getElementById('result').textContent = `The sum is: ${sum}`;
    }
}
