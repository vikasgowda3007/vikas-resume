import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { RESUME } from '../../../core/data/resume-data';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('projects', RESUME.projects);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders each project with its tech list as mono text', () => {
    const element: HTMLElement = fixture.nativeElement;
    const projectTitles = Array.from(element.querySelectorAll('.project-copy h3')).map((title) =>
      title.textContent?.trim()
    );
    const techLines = Array.from(element.querySelectorAll('.project-tech')).map(
      (line) => line.textContent ?? ''
    );

    expect(projectTitles).toContain('AI Resume Generator');
    expect(projectTitles).toContain('Self-Tracking Telescope');
    expect(projectTitles).toContain('Kavach Webpage');
    expect(techLines.some((line) => line.includes('Python'))).toBe(true);
    expect(techLines.some((line) => line.includes('Angular'))).toBe(true);
  });
});
