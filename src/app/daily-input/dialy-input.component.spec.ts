import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialyInputComponent } from './dialy-input.component';

describe('DialyInputComponent', () => {
  let component: DialyInputComponent;
  let fixture: ComponentFixture<DialyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
