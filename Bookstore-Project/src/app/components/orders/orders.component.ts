import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/shared/services/datashare.service';
import { OrderService } from 'src/app/shared/services/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders:any;
  total: any=0;
  isSuccess:boolean=false

constructor(private datashare:DatashareService, private orderservice:OrderService, private router:Router){}

ngOnInit():void{
  this.datashare.getDataInfo().subscribe(data => {
    this.orders = data;
  })
  console.log(this.orders)
  this.orders.products.forEach((item:any) => {
    console.log(item)
    let total = (item.product.price*item.quantity)
    this.total=this.total+total;
  })

  this.orders.total=this.total
  
}

getOrders() {
  this.orderservice.getOrders().subscribe((res)=>{
    console.log(res)
    this.orders=res
  })
}

addOrder() {
  console.log(this.orders)
  this.orderservice.addOrder(this.orders).subscribe((response)=>{
    alert('Order Added Successfully')
      this.router.navigate(['/orderlist'])
  })
}

}