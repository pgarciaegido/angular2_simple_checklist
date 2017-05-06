import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsAdded;
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

  addItem(item:string) {
    // If item is empty, do nothing
    if (item === '') return

    // Create object, and append it to itemsAdded
    let itemObject = {};
    itemObject['name'] = item;
    itemObject['done'] = false;

    this.itemsAdded.push(itemObject);
    this.item = '';

    this.updateLocalStorage(this.itemsAdded);
  }

  addItemEnter(item:string, event){
    if (event.keyCode === 13)
      this.addItem(item);
  }

  deleteItem(item) {
    // Remove element from itemsAdded using filter.
    this.itemsAdded = this.itemsAdded.filter((i) => {
      if (i.name !== item.name) return i
    })

    this.updateLocalStorage(this.itemsAdded);
  }

  taskDone() {
    // Sets done either to true or false when checked
    this.itemsAdded.checked ? this.itemsAdded.done = true
                            : this.itemsAdded.done = false;

    this.updateLocalStorage(this.itemsAdded);
  }
}
