import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineIndiaComponent } from './helpline-india.component';

describe('HelplineIndiaComponent', () => {
  let component: HelplineIndiaComponent;
  let fixture: ComponentFixture<HelplineIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
