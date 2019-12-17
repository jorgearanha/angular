import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDisplayComponent } from './pais-display.component';

describe('PaisDisplayComponent', () => {
  let component: PaisDisplayComponent;
  let fixture: ComponentFixture<PaisDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
