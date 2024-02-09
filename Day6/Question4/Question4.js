/*
Question4:write a class to calculate the Uber price.
*/

class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerMile;
      const timeCost = time * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
      return totalPrice;
    }
  }
  
  const calculator = new UberPriceCalculator(2.5, 0.3, 1.5); 
  const distanceInMiles = 5;
  const timeInMinutes = 15;
  const price = calculator.calculatePrice(distanceInMiles, timeInMinutes);
  console.log("Total price:$", price);
  