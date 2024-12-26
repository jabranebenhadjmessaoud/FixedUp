import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorslistComponent } from './constructorslist.component';

describe('ConstructorslistComponent', () => {
  let component: ConstructorslistComponent;
  let fixture: ComponentFixture<ConstructorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
