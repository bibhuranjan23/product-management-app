import { Component } from '@angular/core';
import { Product} from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

   products : Product[] = [];
   constructor(private router:Router){

   }
   ngOnInit(){
    this.getProducts();
   }
   getProducts(){
       this.products = JSON.parse(localStorage.getItem('products') || '[]');
   }
   deleteProduct(id:any){
        if(confirm('Are you sure to delete this Product ?')){
            if(this.products.findIndex((product)=>product.id==id) > -1){
                 this.products = this.products.filter((product)=>product.id != id);

                 localStorage.removeItem("products");
                 localStorage.setItem("products",JSON.stringify(this.products));
            }
        }
   }

   editPtoduct(productId:number){
    this.router.navigate(
      ['/product-edit',productId] 
      ); 
   }


}
