/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:AppComponent;
  let testObj;

  beforeEach(() => {
    component = new AppComponent();
    testObj = {name: 'item', done: false};
  })

  it('should add item into items array', () => {
    component.addItem('item');

    expect(component.itemsAdded).toContain(testObj);
  })

  it('should remove item from items array', () => {
    component.deleteItem(testObj);

    expect(component.itemsAdded).not.toContain(testObj);

  })
});
