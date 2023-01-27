import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  baseURL="http://localhost:3000/products";
  constructor(private http: HttpClient) { }
   
  getProducts(){
     return this.http.get(this.baseURL);
  }

  getProduct(id:any){
    return this.http.get(`${this.baseURL}/${id}`);
 }

  addProducts(product: any){
    return this.http.post(this.baseURL,product)
  }

  deleteProduct(id:any){
    const delURL=`${this.baseURL}/${id}`
    return this.http.delete(delURL)
  }

  updateProduct(data:any){
    const putURL=`${this.baseURL}/${data.id}`
    return this.http.put(putURL,data)
  }

}
