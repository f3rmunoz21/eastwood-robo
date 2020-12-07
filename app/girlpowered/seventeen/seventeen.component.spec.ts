import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventeenComponent } from './seventeen.component';

describe('SeventeenComponent', () => {
  let component: SeventeenComponent;
  let fixture: ComponentFixture<SeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
