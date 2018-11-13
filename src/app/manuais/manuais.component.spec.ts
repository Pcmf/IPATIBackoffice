import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuaisComponent } from './manuais.component';

describe('ManuaisComponent', () => {
  let component: ManuaisComponent;
  let fixture: ComponentFixture<ManuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
