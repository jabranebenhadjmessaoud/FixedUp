import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicslistComponent } from './mechanicslist.component';

describe('MechanicslistComponent', () => {
  let component: MechanicslistComponent;
  let fixture: ComponentFixture<MechanicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
