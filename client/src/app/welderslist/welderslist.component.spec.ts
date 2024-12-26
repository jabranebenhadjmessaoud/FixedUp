import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelderslistComponent } from './welderslist.component';

describe('WelderslistComponent', () => {
  let component: WelderslistComponent;
  let fixture: ComponentFixture<WelderslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelderslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
