import { Component } from '@angular/core';
import { Employee } from '../employee';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
    employees :Employee[]=[{id:100,name:'Rakesh Kumar',gender:'Male',salary:50000},
    {id:101,name:'Rahul Kumar',gender:'Male',salary:50000},
    {id:102,name:'Rajib Kumar',gender:'Male',salary:50000},
    {id:103,name:'Amisha Kumari',gender:'Female',salary:50000},
    {id:104,name:'Rupashree Kumari',gender:'Female',salary:50000},
    {id:105,name:'Asish Kumar',gender:'Male',salary:50000},
    {id:106,name:'Padmini',gender:'Female',salary:50000},
    {id:106,name:'Subhashree',gender:'Female',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},
    {id:106,name:'Partha',gender:'Male',salary:50000},];
    constructor(private _userService:UserDataService){
          
    }
    ngOnInit(){
      //this.employees = this._userService.getUsers();
    }
    totalCount(){
      return this.employees.length;
    }
    totalMaleCount(){
      return this.employees.filter((emp)=>emp.gender==='Male').length;
    }
    totalFemaleCount(){
      return this.employees.filter((emp)=>emp.gender==='Female').length;
    }

    Counter = 5;
increment() {
this.Counter++;
}
decrement() {
this.Counter--;
}
}
