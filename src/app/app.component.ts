import { Component } from '@angular/core';
import { ItemsService } from './services/items.service';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  private itemsAdded: Item[] = [];


  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.itemsService.getItems().subscribe(
      item => this.itemsAdded = item
    )
  }

  addItem(description:string) {
    // If description is empty, does nothing
    if (description === '') return

    // Append given description and checked false
    let data = { "description": description, "checked": false };

    this.itemsService.addItems(data).subscribe(
      response => this.refresh()
    )
  }

  addItemEnter(description:string, event){
    if (event.keyCode === 13)
      this.addItem(description);
  }

  deleteItem(itemId:number) {
    // Remove element from itemsAdded using filter.
    this.itemsService.deleteItem(itemId).subscribe(
      response => this.refresh()
    )
  }

  toggleChecked(item: Item) {
    item.checked = !item.checked;
  }
}
