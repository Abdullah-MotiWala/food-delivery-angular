import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'search/:searchText',
    component: HomeComponent,
  },
  {
    path: 'food/:foodName',
    component: FoodComponent,
  },
  {
    path: 'cart-page',
    component: CartComponent,
  },
];
