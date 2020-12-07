import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlpoweredComponent } from './girlpowered.component';

describe('GirlpoweredComponent', () => {
  let component: GirlpoweredComponent;
  let fixture: ComponentFixture<GirlpoweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlpoweredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlpoweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
