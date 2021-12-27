import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProyectionComponent } from './content-proyection.component';

describe('ContentProyectionComponent', () => {
  let component: ContentProyectionComponent;
  let fixture: ComponentFixture<ContentProyectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProyectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProyectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
