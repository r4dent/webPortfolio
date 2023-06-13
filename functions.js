function mySum(x1, x2) {
    return x1 + x2;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
  }
  
  function calculateSum() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = mySum(num1, num2);
  
    document.getElementById('sumResult').textContent = sum;
  }
  
  function convertToFahrenheit() {
    var celsius = parseInt(document.getElementById('celsius').value);
    var fahrenheit = toFahrenheit(celsius);
  
    document.getElementById('fahrenheitResult').textContent = fahrenheit;
  }
  function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = weight / ((height / 100) ** 2);
  
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);
  }






  function sum(array) {
    return array.reduce((total, value) => total + value, 0);
  }
  
  function mean(array) {
    return sum(array) / array.length;
  }
  
  function median(array) {
    array.sort((a, b) => a - b);
    var middleIndex = Math.floor(array.length / 2);
  
    if (array.length % 2 === 0) {
      return (array[middleIndex - 1] + array[middleIndex]) / 2;
    } else {
      return array[middleIndex];
    }
  }
  
  function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = weight / ((height / 100) ** 2);
    var weightClass = "";
  
    if (bmi < 18.5) {
      weightClass = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      weightClass = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      weightClass = "Overweight";
    } else {
      weightClass = "Obese";
    }
  
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);
    document.getElementById('weightClass').textContent = weightClass;
  }
  
  function calculateStatistics() {
    var valuesInput = document.getElementById('values').value;
    var valuesArray = valuesInput.split(';').map(Number);
    var sumValue = sum(valuesArray);
    var meanValue = mean(valuesArray);
    var medianValue = median(valuesArray);
  
    document.getElementById('sumResult').textContent = sumValue;
    document.getElementById('meanResult').textContent = meanValue.toFixed(2);
    document.getElementById('medianResult').textContent = medianValue.toFixed(2);
  }
  