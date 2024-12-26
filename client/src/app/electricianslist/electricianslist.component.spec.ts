import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricianslistComponent } from './electricianslist.component';

describe('ElectricianslistComponent', () => {
  let component: ElectricianslistComponent;
  let fixture: ComponentFixture<ElectricianslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricianslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricianslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
