import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
   constructor(private activateRoute:ActivatedRoute){

   }
   id:any=0;
   ngOnInit(){
      // this.id = this.activateRoute.snapshot.paramMap.get("id");
      // console.log(this.id);
      // this.id = this.activateRoute.snapshot.params["id"];
      // console.log(this.id);
      //console.log(this.activateRoute.snapshot.paramMap.has("abc"));
       this.activateRoute.paramMap.subscribe(data=>{
        this.id = data.get('id');
       });
       console.log(this.id);

       this.activateRoute.params.subscribe(obj=>{
        this.id = obj['id'];
       });
       console.log(this.id);
      
   }
}
