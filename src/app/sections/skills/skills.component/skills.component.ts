import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../../core/models/resume/resume.module';
import { RevealDirective } from '../../../core/reveal.directive';
import { DrawPathDirective } from '../../../core/draw-path.directive';

/** Stroke icons drawn on scroll, matched to category order. */
const CATEGORY_ICONS: Record<string, string> = {
  'frontend & product': 'M4 7 H28 V23 H4 Z M4 12 H28 M11 27 H21',
  'backend & apis': 'M6 6 H26 V13 H6 Z M6 19 H26 V26 H6 Z M10 9.5 H14 M10 22.5 H14',
  languages: 'M11 8 L4 16 L11 24 M21 8 L28 16 L21 24',
  'data, devops & tooling':
    'M16 5 C10 5 6 6.8 6 9 V23 C6 25.2 10 27 16 27 C22 27 26 25.2 26 23 V9 C26 6.8 22 5 16 5 Z M6 9 C6 11.2 10 13 16 13 C22 13 26 11.2 26 9 M6 16 C6 18.2 10 20 16 20 C22 20 26 18.2 26 16'
};

const DEFAULT_ICON = 'M6 16 H26 M16 6 V26';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective, DrawPathDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input({ required: true }) skills!: SkillCategory[];

  iconFor(category: SkillCategory): string {
    return CATEGORY_ICONS[category.category.trim().toLowerCase()] ?? DEFAULT_ICON;
  }
}
