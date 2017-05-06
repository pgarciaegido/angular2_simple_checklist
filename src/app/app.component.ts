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
    if (item === '') return

    let itemObject = {};
    itemObject['name'] = item;
    itemObject['done'] = false;
    this.itemsAdded.push(itemObject);
    console.log(this.itemsAdded);
  }

  // deleteItem(item:string) {
  //   let index = this.itemsAdded.indexOf(item);
  //   this.itemsAdded.splice(index, 1);
  //   console.log(this.itemsAdded);
  // }
}
