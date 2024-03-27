import { Component } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
    products: Product[] =[];
    product : Product = {
       id: 0,
       title: '',
       description: '',
       price: 0,
       discountPercentage: 0,
       rating: 0,
       stock: 0,
       brand: '',
       category: '',
       thumbnail: '',
       images: []
    }

    addProduct(){
       this.products = JSON.parse(localStorage.getItem("products") ?? '{}');
       this.products.push(this.product);
       localStorage.setItem("products",JSON.stringify(this.products));
       console.log(this.product);
    }
}
