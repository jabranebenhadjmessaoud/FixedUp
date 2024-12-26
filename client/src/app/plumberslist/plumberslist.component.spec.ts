import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberslistComponent } from './plumberslist.component';

describe('PlumberslistComponent', () => {
  let component: PlumberslistComponent;
  let fixture: ComponentFixture<PlumberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlumberslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
