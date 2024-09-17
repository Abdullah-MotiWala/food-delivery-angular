import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common'; // Required for *ngFor
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    ChildComponent,
    Child2Component,
    RouterModule,
  ],
})
export class HomeComponent implements OnInit {
  foodServices: string[] = [];
  test = true;
  subscription: any;
  constructor(private fs: FoodService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.subscription =
    this.route.params.subscribe((params) => {
      if (params['searchText'])
        this.foodServices = this.fs
          .getFoodItem()
          .filter((item) =>
            item.toLowerCase().includes(params['searchText'].toLowerCase())
          );
      else this.foodServices = this.fs.getFoodItem();
    });
  }

  //   ngOnDestroy(): void {
  //     this.subscription.unsubscribe();
  //   }
  recieveMessage(message: any) {
    alert(message);
    console.log(message);
  }
}
