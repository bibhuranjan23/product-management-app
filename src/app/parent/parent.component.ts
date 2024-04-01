import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title ="Parent-Component";
  Counter = 20;
  dob = new Date();
  months=['Januarr','February','March','April','May','June','July','August','September','October','Novenmer','December'];
  value=8765435;
  user ={
    name:"Alok",
    email:'alok@gmail.com',
    mobile:'89089898989'
  }
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
    
}
