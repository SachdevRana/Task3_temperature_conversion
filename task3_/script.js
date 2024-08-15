document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    let temperature = document.getElementById('temperature').value;
    let scale = document.getElementById('scale').value;

    // Validate the input
    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    temperature = parseFloat(temperature);

    // Convert the temperature
    let convertedTemp;
    let convertedScale;
    
    if (scale === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedScale = 'Fahrenheit';
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        convertedScale = 'Celsius';
    }

    // Display the result with a fade-in effect
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('show');
    resultDiv.innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} °${convertedScale}`;
    setTimeout(() => {
        resultDiv.classList.add('show');
    }, 100);
});

