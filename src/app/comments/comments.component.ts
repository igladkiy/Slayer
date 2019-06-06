import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Item } from '../Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public Item: Item;
 
  private id:number = +this.route.snapshot.paramMap.get('id');


  constructor(private itemService: ItemServiceService, private route: ActivatedRoute ) { }

  ngOnInit() {
   this.getItem();
  }


  getItem(){
    
    this.Item = this.itemService.GetItem(this.id);
  }

  addComments(text:string){
    if(text !=''){
   this.itemService.addComments(text, this.id);
  }else{
    alert('input smth')
  }
  }
}
