import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private _du:DesignUtilityService) { 
    this._du.ItemCounts.subscribe((res: number | undefined)=>{
      this.ItemCounts=res;
    })
  }

ItemCounts:number | undefined;

  ngOnInit(): void {
  }

}
