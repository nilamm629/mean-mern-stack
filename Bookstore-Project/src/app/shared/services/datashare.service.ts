import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  
  private data = new BehaviorSubject<any>("data");

  setDataInfo(data: any) {
    this.data.next(data);
  }

  getDataInfo() {
    return this.data.asObservable();
  }

}
