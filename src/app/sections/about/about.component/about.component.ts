import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume } from '../../../core/models/resume/resume.module';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input({ required: true }) resume!: Resume;
}
