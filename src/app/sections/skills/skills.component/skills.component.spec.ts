import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { RESUME } from '../../../core/data/resume-data';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('skills', RESUME.skills);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one card with a drawn icon per skill category', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cards = element.querySelectorAll('.skill-card');
    const icons = element.querySelectorAll('.skill-icon path');

    expect(cards.length).toBe(RESUME.skills.length);
    expect(icons.length).toBe(RESUME.skills.length);
  });

  it('renders skill items as mono lines and leaves awards out of the grid', () => {
    const element: HTMLElement = fixture.nativeElement;
    const lineTexts = Array.from(element.querySelectorAll('.skill-lines li')).map((line) =>
      line.textContent?.trim()
    );

    expect(lineTexts).toContain('Angular');
    expect(lineTexts).not.toContain('Engineering Excellence Award (2024)');
    expect(lineTexts).not.toContain('GoLang (Udemy)');
  });
});
