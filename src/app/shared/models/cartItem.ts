export class CartItem {
  constructor(food: {}) {
    this.food = food;
  }
  food: {};
  quantity: number = 1;

  getPrice(): number {
    return Math.random();
  }
}
