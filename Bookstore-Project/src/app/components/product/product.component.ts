import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   @Input()   
   product:any

   @Output()
 emitterObj= new EventEmitter()
constructor(){}
  ngOnInit(): void {
 //  console.log(this.product)
}
selectProduct(){
  this.emitterObj.emit(this.product)
}
}
