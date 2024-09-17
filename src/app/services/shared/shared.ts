import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private messageSource = new BehaviorSubject('Initial Message');
  private newMessageSource = new BehaviorSubject([]);

  currentMessage = this.messageSource.asObservable();
  currentData = this.newMessageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getData(data: any) {
    this.newMessageSource.next(data);
  }
}
