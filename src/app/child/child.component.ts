import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../services/shared/shared';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: true,
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private ss: SharedService) {}
  sendMessage() {
    this.messageEvent.emit('Hello from Child');
    alert('Clicked');
  }

  updateSibling() {
    this.ss.changeMessage('Hello from Child-1');
  }

  getData() {
    this.ss.getData([{ name: 'Applce' }]);
  }
}
