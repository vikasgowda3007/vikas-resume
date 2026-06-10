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

  it('renders one indexed card per skill category', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cards = element.querySelectorAll('.skill-card');
    const firstIndex = element.querySelector('.skill-index');

    expect(cards.length).toBe(RESUME.skills.length);
    expect(firstIndex?.textContent?.trim()).toBe('01');
  });

  it('renders stack categories as chips and long-form categories as lines', () => {
    const element: HTMLElement = fixture.nativeElement;
    const chipTexts = Array.from(element.querySelectorAll('.skill-chips .chip')).map((chip) =>
      chip.textContent?.trim()
    );
    const lineTexts = Array.from(element.querySelectorAll('.skill-lines li')).map((line) =>
      line.textContent?.trim()
    );

    expect(chipTexts).toContain('Angular');
    expect(lineTexts).toContain('Engineering Excellence Award (2024)');
    expect(lineTexts).toContain('GoLang (Udemy)');
    expect(chipTexts).not.toContain('Engineering Excellence Award (2024)');
  });
});
