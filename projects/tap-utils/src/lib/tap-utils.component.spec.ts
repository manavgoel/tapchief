import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapUtilsComponent } from './tap-utils.component';

describe('TapUtilsComponent', () => {
  let component: TapUtilsComponent;
  let fixture: ComponentFixture<TapUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
