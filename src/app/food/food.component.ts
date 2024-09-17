import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  standalone: true,
  imports: [HeaderComponent],
})
export class FoodComponent implements OnInit {
  food: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FoodService,
    private cs: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.food = this.fs.getFoodByName(params['foodName']);
    });
  }

  addToCart() {
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
