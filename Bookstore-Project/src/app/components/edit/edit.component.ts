import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from 'src/app/shared/services/product-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any
  product:any

  constructor(private activatedRouter:ActivatedRoute, private productdataservice:ProductDataService, private router:Router){}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((para)=>{
      this.id=para.get('id')
    
    })
    this.getProduct(this.id)
  }

  getProduct(id: any) {
    this.productdataservice.getProduct(this.id).subscribe
     ((res)=>{
       this.product ={...res}
     })
  }

  putData(data:any){
    const product={
      id:this.id,
      name:data.name,
      image:data.image,
      price:data.price
    }
    this.productdataservice.updateProduct(product).subscribe(()=>{
      alert('Product Updated Successfully')
      this.router.navigate(['/productlist'])
    })
  }

}
