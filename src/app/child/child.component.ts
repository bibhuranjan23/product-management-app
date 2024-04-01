import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
   @Input() count:number = 6;
   @Output() countChanged: EventEmitter<number> = new EventEmitter();
   increment(){
       this.count++;
       //this.countChanged.emit(this.count);
   }
   decrement(){
       this.count--;
       //this.countChanged.emit(this.count);
   }
}
