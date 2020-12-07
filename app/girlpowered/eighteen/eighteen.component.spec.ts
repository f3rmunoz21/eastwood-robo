import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighteenComponent } from './eighteen.component';

describe('EighteenComponent', () => {
  let component: EighteenComponent;
  let fixture: ComponentFixture<EighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
