import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../../core/models/resume/resume.module';
import { RevealDirective } from '../../../core/reveal.directive';

const LIST_CATEGORIES = new Set(['recognition', 'certifications']);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input({ required: true }) skills!: SkillCategory[];

  isListCategory(category: SkillCategory): boolean {
    return LIST_CATEGORIES.has(category.category.trim().toLowerCase());
  }
}
