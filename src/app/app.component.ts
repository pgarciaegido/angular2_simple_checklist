import { Component } from '@angular/core';
import { Item } from './items/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private itemsAdded: Item[];
  item = '';

  constructor() {
    // If window.localStorage['checklist'] exists, parse info from there.
    // Otherwise, create new array.
    try{
      this.itemsAdded = JSON.parse(window.localStorage['checklist']);
    } catch(err) {
      this.itemsAdded = [];
    }
  }

  updateLocalStorage(items) {
    // Updates localStorage. Executed after any modification.
    window.localStorage['checklist'] = JSON.stringify(items);
  }


  addItem(name:string) {
    // If name is empty, does nothing
    if (name === '') return

    // Append given name and done false
    this.itemsAdded.push({name, done: false});
    this.item = '';

    this.updateLocalStorage(this.itemsAdded);
  }

  addItemEnter(name:string, event){
    if (event.keyCode === 13)
      this.addItem(name);
  }

  deleteItem(item) {
    // Remove element from itemsAdded using filter.
    this.itemsAdded = this.itemsAdded.filter((i) => {
      if (i.name !== item.name) return i
    })

    this.updateLocalStorage(this.itemsAdded);
  }

  taskDone() {
    this.updateLocalStorage(this.itemsAdded);
  }

}
