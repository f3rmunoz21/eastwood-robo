import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastwoodmiddleComponent } from './eastwoodmiddle.component';

describe('EastwoodmiddleComponent', () => {
  let component: EastwoodmiddleComponent;
  let fixture: ComponentFixture<EastwoodmiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastwoodmiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastwoodmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
