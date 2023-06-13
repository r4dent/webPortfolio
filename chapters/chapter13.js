// Product Object
const product = {
    id: 1,
    name: "PS5",
    netPrice: 500,
    grossPrice: function() {
      return this.netPrice * 1.2; // Assuming 20% VAT
    }
  };
  
  // Temperature Sensor Class
  class TemperatureSensor {
    constructor() {
      this.temperature = 0;
      this.min = 15;
      this.max = 20;
    }
  
    generateValue() {
      this.temperature = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
  }
  
  // Initialize Product and Temperature Sensor
  const temperatureSensor = new TemperatureSensor();
  
  // Update HTML elements with initial data
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productId").textContent = product.id;
  document.getElementById("currentTemperature").textContent = temperatureSensor.temperature;
  document.getElementById("minTemperature").textContent = temperatureSensor.min;
  document.getElementById("maxTemperature").textContent = temperatureSensor.max;
  
  // Calculate Gross Price
  function calculateGrossPrice() {
    const netPrice = document.getElementById("netPriceInput").value;
    product.netPrice = netPrice;
    document.getElementById("grossPrice").textContent = product.grossPrice();
  }
  
// Generate New Temperature
function generateNewTemperature() {
    temperatureSensor.min = parseInt(document.getElementById("minTemperatureInput").value);
    temperatureSensor.max = parseInt(document.getElementById("maxTemperatureInput").value);
  
    // Ensure that the min temperature is smaller than or equal to the max temperature
    if (temperatureSensor.min > temperatureSensor.max) {
      alert("Min temperature cannot be greater than max temperature");
      return;
    }
  
    temperatureSensor.generateValue();
    document.getElementById("currentTemperature").textContent = temperatureSensor.temperature;
    document.getElementById("minTemperature").textContent = temperatureSensor.min;
    document.getElementById("maxTemperature").textContent = temperatureSensor.max;
  }
  