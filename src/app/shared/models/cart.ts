import { CartItem } from './cartItem';

export class Cart {
  items: CartItem[] = [];

  get TotalPrice():number{
    return this.items.reduce((a, b) => a + b.getPrice(),0)
  }
}
