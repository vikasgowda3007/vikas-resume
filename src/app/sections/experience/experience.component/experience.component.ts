import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../core/models/resume/resume.module';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input({ required: true }) experience!: Experience[];
}
