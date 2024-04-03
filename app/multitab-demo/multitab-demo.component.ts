import { Component } from '@angular/core';

@Component({
  selector: 'app-multitab-demo',
  templateUrl: './multitab-demo.component.html',
  styleUrl: './multitab-demo.component.css'
})
export class MultitabDemoComponent {
  selectedTab: string = 'tab1'; // Initialize selected tab to Tab 1
}
