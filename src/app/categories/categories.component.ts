import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
count:number=0;
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
  }


  onAdd(){
    this.count=this.count+1;
    this._du.ItemCounts.next(this.count);
  }

  onDelete(){
    this.count=this.count-1;
    this._du.ItemCounts.next(this.count);

  }
}
