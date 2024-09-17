import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(food: string) {
    let cartItem = this.cart.items.find((item) => item.food === food);
    if (cartItem) {
      this.changeQuantity(food, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  changeQuantity(food: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food === food);
    if (cartItem) cartItem.quantity = quantity;
  }

  removeFromCart(food: string) {
    this.cart.items = this.cart.items.filter((item) => item.food !== food);
  }

  getCart(): Cart {
    return this.cart;
  }
}
