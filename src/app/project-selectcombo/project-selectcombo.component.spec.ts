import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSelectcomboComponent } from './project-selectcombo.component';

describe('ProjectSelectcomboComponent', () => {
  let component: ProjectSelectcomboComponent;
  let fixture: ComponentFixture<ProjectSelectcomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSelectcomboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSelectcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
