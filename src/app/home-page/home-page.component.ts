import { Component, OnInit } from '@angular/core';
import { CreateItemComponent } from '../create-item/create-item.component';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';
import { ItemViewModel } from './itemViewModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public Items: ItemViewModel[] = [];



  constructor(private itemService: ItemServiceService) { }


  ngOnInit() {
    this.Items = this.getItems();
    
  }

  getItems(){
    return this.itemService.GetItems().map(function(x){
      return {id: x.id, name: x.name, showDeleteBtn:false, comments: x.comments};
    });
  }

  deleteItem(id: number){
    // console.log(id);
  this.itemService.deleteItem(id);
  this.Items = this.getItems();
  }


}
