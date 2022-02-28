import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedOperatorComponent } from './shared-operator.component';

describe('SharedOperatorComponent', () => {
  let component: SharedOperatorComponent;
  let fixture: ComponentFixture<SharedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
