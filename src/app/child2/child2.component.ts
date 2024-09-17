import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared/shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component implements OnInit {
  message!: string;
  data!: any[];
  subs!: any;
  constructor(private ss: SharedService) {}

  ngOnInit(): void {
    this.ss.currentMessage.subscribe((message) => {
      this.message = message;
    });

    this.ss.currentData.subscribe((data) => {
      this.data = data;
      console.log(this.data, data, '===data');
    });
  }
}
