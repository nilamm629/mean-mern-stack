import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/shared/services/product-data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  product:any
constructor(private productdataservice:ProductDataService ){ }
ngOnInit(): void { 
  this.getProducts();
}

getProducts(){
  this.productdataservice.getProducts().subscribe((res)=>{
    this.product=res
  })
}

delete(id:any){
  this.productdataservice.deleteProduct(id).subscribe(()=>{
   alert('Product deleted successfully')
   this.getProducts();
  })
}

}
