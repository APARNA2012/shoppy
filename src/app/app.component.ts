import { Component } from '@angular/core';
import { BadgePositions } from './badge.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'badge';
  count=0;
  badgePosition:BadgePositions="top-right";
  increment(){
    this.count++
    console.log(this.count)
  }
}