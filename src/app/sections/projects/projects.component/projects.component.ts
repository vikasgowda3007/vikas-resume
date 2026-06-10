import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/resume/resume.module';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: Project[];
}
