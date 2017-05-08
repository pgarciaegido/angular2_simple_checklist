import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  @Input()
  private item;

  @Output()
  private remove = new EventEmitter<any>();

  @Output()
  private update = new EventEmitter<any>();

  fireRemove() {
    this.remove.emit();
  }

  fireUpdate() {
    this.update.emit();
  }
}
