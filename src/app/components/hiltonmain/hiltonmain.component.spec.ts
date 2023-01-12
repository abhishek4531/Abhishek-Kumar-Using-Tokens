import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiltonmainComponent } from './hiltonmain.component';

describe('HiltonmainComponent', () => {
  let component: HiltonmainComponent;
  let fixture: ComponentFixture<HiltonmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiltonmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiltonmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
