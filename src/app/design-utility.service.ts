import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DesignUtilityService {
ItemCounts=new BehaviorSubject<number>(0);
  constructor() { }
}
