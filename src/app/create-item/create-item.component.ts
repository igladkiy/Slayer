import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Item } from "../Item";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemServiceService) { }

  

  ngOnInit() {
    
  }

  saveItem(name){
    let x = name.trim()
    if(x!==''){
    this.itemService.SaveItem(x);
  }else{
    alert('item doesn"t save!!')
  }

  }

}
