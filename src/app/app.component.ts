import { Component } from '@angular/core';
import { Http } from '@angular/http';

// Creates sort of an object template so typescript could help us with possible bugs
interface Item {
  description: string;
  checked: boolean;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private itemsAdded: Item[] = [];

  // Backend url
  url:string = 'http://localhost:8080/items/';

  constructor(private http: Http) {
    this.http.get(this.url).subscribe(
      response => {
        // Formates the response
        this.itemsAdded = response.json();
      },
      error => console.log(error)
    )
  }


  addItem(description:string) {
    // If description is empty, does nothing
    if (description === '') return

    // Append given description and checked false
    let data = { "description": description, "checked": false };

    this.http.post(this.url, data).subscribe(
      response => {
        this.itemsAdded.push(data);
      },
      error => console.log(error)
    );

  }

  addItemEnter(description:string, event){
    if (event.keyCode === 13)
      this.addItem(description);
  }

  deleteItem(itemId:number) {
    // Remove element from itemsAdded using filter.
    let deleteUrl = this.url + itemId;
    this.http.delete(deleteUrl).subscribe(
      response => {
        this.itemsAdded = this.itemsAdded.filter((i) => {
            if (i.id !== itemId) return i
        })
      },
      error => console.log(error)
    )
  }
}
