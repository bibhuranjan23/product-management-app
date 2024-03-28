import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiformDemoComponent } from './multiform-demo.component';

describe('MultiformDemoComponent', () => {
  let component: MultiformDemoComponent;
  let fixture: ComponentFixture<MultiformDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiformDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiformDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
