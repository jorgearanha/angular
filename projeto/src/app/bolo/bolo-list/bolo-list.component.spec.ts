import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloListComponent } from './bolo-list.component';

describe('BoloListComponent', () => {
  let component: BoloListComponent;
  let fixture: ComponentFixture<BoloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
