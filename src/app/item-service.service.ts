import { Item } from './Item';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemServiceService {

  private items: Item[] = [];

  constructor() { }

  public SaveItem(name: string): void {
    let lastId = this.items[this.items.length - 1] ? this.items[this.items.length - 1].id : 0;
    this.items.push({id: lastId + 1, name: name, comments:[]
    });
  }

  public GetItems(): Item[] {
    return this.items;
  }

  public GetItem(id): Item{
    return this.items.find(x => x.id == id)
  }

  public deleteItem(id: number){
    this.items = this.items.filter(x=> x.id !== id);
  }

  public addComments(text:string, id: number){
    let item = this.GetItem(id);
    item.comments.push(text);
  }

}
