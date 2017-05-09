import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Item } from '../models/item.model';


@Injectable()
export class ItemsService {

  BASE_URL:string = 'http://localhost:8080/items/';

  constructor(private http: Http) { }

  getItems() {
    return this.http.get(this.BASE_URL)
      .map( response => response.json());
  }

  addItems(item:Item) {
    return this.http.post(this.BASE_URL, item)
      .map( response => response.json())
  }

  deleteItem(itemId:number) {
    let deleteUrl = this.BASE_URL + itemId;

    return this.http.delete(deleteUrl)
      .map( response => response.json())
  }
}
