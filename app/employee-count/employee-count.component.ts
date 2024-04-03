import { Component,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-employee-count',
  inputs:['count','empcount'],
  templateUrl: './employee-count.component.html',
  styleUrl: './employee-count.component.css'
})
export class EmployeeCountComponent implements OnChanges {
    @Input('total') all:number=0;
    @Input() male:number=0;
    @Input() female:number=0;
    count:number=0;
    empcount:number=9;
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      for (let property in changes) {
        if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
        } 
        }
    }
}
