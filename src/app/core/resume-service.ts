import { Injectable } from '@angular/core';
import { Resume } from './models/resume/resume.module';
import { RESUME } from './data/resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getResume(): Resume {
    return RESUME;
  }
}
