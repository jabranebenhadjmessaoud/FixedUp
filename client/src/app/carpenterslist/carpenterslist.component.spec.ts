import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpenterslistComponent } from './carpenterslist.component';

describe('CarpenterslistComponent', () => {
  let component: CarpenterslistComponent;
  let fixture: ComponentFixture<CarpenterslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpenterslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpenterslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
