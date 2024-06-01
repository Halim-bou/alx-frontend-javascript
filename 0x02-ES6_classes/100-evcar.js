import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, moto, color, range) {
    super(brand, moto, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
