import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddingComponent } from './cadding.component';

describe('CaddingComponent', () => {
  let component: CaddingComponent;
  let fixture: ComponentFixture<CaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
