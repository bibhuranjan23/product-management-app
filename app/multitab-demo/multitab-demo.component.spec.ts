import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitabDemoComponent } from './multitab-demo.component';

describe('MultitabDemoComponent', () => {
  let component: MultitabDemoComponent;
  let fixture: ComponentFixture<MultitabDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultitabDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultitabDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
