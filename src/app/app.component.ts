import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // {name: 'Milk', done: false}
  itemsAdded = [];
  item = '';

  addItem(item:string) {
    // If item is empty, do nothing
    if (item === '') return

    // Create object, and append it to itemsAdded
    let itemObject = {};
    itemObject['name'] = item;
    itemObject['done'] = false;
    this.itemsAdded.push(itemObject);
    this.item = '';
  }

  addItemEnter(item, event){
    if (event.keyCode === 13)
      this.addItem(item);
  }

  deleteItem(item) {
    // Remove element from itemsAdded using filter.
    this.itemsAdded = this.itemsAdded.filter((i) => {
      if (i.name !== item.name) return i
    })
  }
}
