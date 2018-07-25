import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvolochnaiaComponent } from './provolochnaia.component';

describe('ProvolochnaiaComponent', () => {
  let component: ProvolochnaiaComponent;
  let fixture: ComponentFixture<ProvolochnaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvolochnaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvolochnaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
