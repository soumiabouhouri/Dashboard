import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInputComponent } from './extra-input.component';

describe('ExtraInputComponent', () => {
  let component: ExtraInputComponent;
  let fixture: ComponentFixture<ExtraInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
