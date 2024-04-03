import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers:[UserDataService]
})
export class UserListComponent {
   users:User[]=[];
   constructor(private _userService:UserDataService){
      
   }
   ngOnInit(){
    this._userService.getUsers().subscribe(
         (data)=>{
            console.log(data);
            this.users = data;
         }
         
    );
    console.log(this.users);
   }

   


  
}
