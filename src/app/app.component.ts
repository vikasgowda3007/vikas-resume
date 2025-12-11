import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component/navbar.component';
import { HeroComponent } from './sections/hero/hero.component/hero.component';
import { AboutComponent } from './sections/about/about.component/about.component';
import { ExperienceComponent } from './sections/experience/experience.component/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component/projects.component';
import { SkillsComponent } from './sections/skills/skills.component/skills.component';
import { ContactComponent } from './sections/contact/contact.component/contact.component';
import { ResumeService } from './core/resume-service';
import { Resume } from './core/models/resume/resume.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resume: Resume;

  constructor(private resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
}
