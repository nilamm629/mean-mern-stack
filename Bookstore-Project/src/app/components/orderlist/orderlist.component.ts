import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {

orderList: any
constructor(private orderService:OrderService){}

ngOnInit():void {
    this.getOrders();
}

  getOrders() {
    this.orderService.getOrders().subscribe((res)=>{
      console.log(res)
       this.orderList=res;
    })
  }

}
