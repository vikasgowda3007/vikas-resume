import { Component, Input, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactInfo, ResumeLink } from '../../../core/models/resume/resume.module';
import { isLinkedInProfileLink } from '../../../core/linkedin-badge';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy {
  @Input({ required: true }) contact!: ContactInfo;
  @Input({ required: true }) links!: ResumeLink[];

  private readonly platformId = inject(PLATFORM_ID);
  private copyResetTimer?: ReturnType<typeof setTimeout>;

  readonly copied = signal(false);

  get linkedinLink(): ResumeLink | undefined {
    return this.links.find((link) => isLinkedInProfileLink(link.href));
  }

  get otherLinks(): ResumeLink[] {
    return this.links.filter((link) => !isLinkedInProfileLink(link.href));
  }

  async copyEmail(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.copied.set(true);

      if (this.copyResetTimer !== undefined) {
        clearTimeout(this.copyResetTimer);
      }
      this.copyResetTimer = setTimeout(() => {
        this.copied.set(false);
        this.copyResetTimer = undefined;
      }, 2000);
    } catch {
      // Clipboard unavailable — the mailto link remains the primary path.
    }
  }

  ngOnDestroy(): void {
    if (this.copyResetTimer !== undefined) {
      clearTimeout(this.copyResetTimer);
    }
  }
}
