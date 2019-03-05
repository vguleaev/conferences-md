import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMissionDialogComponent } from './project-mission-dialog.component';

describe('ProjectMissionDialogComponent', () => {
  let component: ProjectMissionDialogComponent;
  let fixture: ComponentFixture<ProjectMissionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMissionDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
