import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/shared/services/product-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private productdataservice:ProductDataService, private router:Router){}
  
  ngOnInit():void{ 
  }

   addData(data:any){
    console.log(data)
    this.productdataservice.addProducts(data).subscribe(()=>{
      alert('Product Added Successfully')
      this.router.navigate(['/productlist'])
    })
   }
}
