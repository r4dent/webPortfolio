// Chapter 13 - Product Object

// Product object using traditional JS
var product = {
    id: 1,
    name: 'PS5',
    netPrice: 500,
    grossPrice: function() {
      var vat = this.netPrice * 0.2;
      return this.netPrice + vat;
    }
  };
  
  // Accessing the grossPrice method using traditional JS
  console.log('Gross Price (Traditional JS):', product.grossPrice());
  
  // Product object using ES6 class syntax
  class Product {
    id: number;
    name: string;
    netPrice: number;
  
    constructor(id: number, name: string, netPrice: number) {
      this.id = id;
      this.name = name;
      this.netPrice = netPrice;
    }
  
    grossPrice(): number {
      let vat = this.netPrice * 0.2;
      return this.netPrice + vat;
    }
  }
  
  // Creating an instance of the Product class
  const ps5 = new Product(1, 'PS5', 500);
  
  // Accessing the grossPrice method using ES6 class syntax
  console.log('Gross Price (ES6 Class):', ps5.grossPrice());
  
  
  // Chapter 13 - Temperature Sensor
  
  // TypeScript interface for Sensor
  interface Sensor {
    getValue(): number;
  }
  
  // TypeScript class for Temperature Sensor
  class TemperatureSensor implements Sensor {
    temperature: number;
    min: number;
    max: number;
  
    constructor(min: number, max: number) {
      this.temperature = 0;
      this.min = min;
      this.max = max;
    }
  
    generateValue(): void {
      this.temperature = Math.random() * (this.max - this.min) + this.min;
    }
  
    getValue(): number {
      return this.temperature;
    }
  }
  
  // Creating an instance of TemperatureSensor
  const temperatureSensor = new TemperatureSensor(15, 20);
  
  // Generating a random temperature value
  temperatureSensor.generateValue();
  
  // Accessing the temperature value using the getValue method
  console.log('Temperature:', temperatureSensor.getValue());
  