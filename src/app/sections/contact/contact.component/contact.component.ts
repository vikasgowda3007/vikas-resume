import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfo, ResumeLink } from '../../../core/models/resume/resume.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input({ required: true }) contact!: ContactInfo;
  @Input({ required: true }) links!: ResumeLink[];
}
