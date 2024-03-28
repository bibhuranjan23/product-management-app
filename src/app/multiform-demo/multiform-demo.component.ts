import { Component } from '@angular/core';

@Component({
  selector: 'app-multiform-demo',
  templateUrl: './multiform-demo.component.html',
  styleUrl: './multiform-demo.component.css'
})
export class MultiformDemoComponent {
  currentStep: number = 1;
 

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    // Implement form submission logic here
    console.log('Form submitted successfully!');
  }
}




  