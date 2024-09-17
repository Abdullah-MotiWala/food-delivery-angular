import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodByName(name: string) {
    return name;
  }

  getFoodItem() {
    return ['Apple', 'Bannana', 'Mango'];
  }
}
