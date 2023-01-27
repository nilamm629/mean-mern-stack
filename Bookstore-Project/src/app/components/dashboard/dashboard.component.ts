import { R3SelectorScopeMode } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import { DatashareService } from 'src/app/shared/services/datashare.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  product:any;
  count:number=0;
  order:any={}
  products:any=[]
  
constructor(private productService:ProductDataService, private dataShareService:DatashareService,private router: Router){}

ngOnInit():void {
    this.getProducts()
}
  getProducts(){
  this.productService.getProducts().subscribe((res)=>{
    console.log(res)
     this.product=res;
  })
} 

addToCart(product:any){
  let isExist:boolean=false
  this.products.forEach((item:any) => {
    if(item.product.id===product.id) {
      item.quantity = ++item.quantity
      isExist=true
    } 
  });
  
  if(!isExist){
    this.products.push({
      product:product,
      quantity:1
    })
  }
  this.count=this.products.length;
}

goToOrder() {
  this.order= {"products": this.products}
  this.dataShareService.setDataInfo(this.order);
  this.router.navigate(['/orders']);

}

}