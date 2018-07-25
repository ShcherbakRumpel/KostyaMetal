import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProshivnaiaComponent } from './proshivnaia.component';

describe('ProshivnaiaComponent', () => {
  let component: ProshivnaiaComponent;
  let fixture: ComponentFixture<ProshivnaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProshivnaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProshivnaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
