import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
const routes: Routes = [
   {path:'',component:ProductListComponent},
   {path:'product-list',component:ProductListComponent},
   {path:'product-edit',component:ProductEditComponent},
   {path:'product-add',component:ProductAddComponent},
   {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
