import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaissancesComponent } from './connaissances.component';

describe('ConnaissancesComponent', () => {
  let component: ConnaissancesComponent;
  let fixture: ComponentFixture<ConnaissancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaissancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnaissancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
