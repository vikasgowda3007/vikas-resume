import { Component, DestroyRef, Input, afterNextRender, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input({ required: true }) name!: string;

  private readonly destroyRef = inject(DestroyRef);

  readonly progress = signal(0);
  readonly activeId = signal('');
  readonly isDark = signal(false);

  sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  constructor() {
    afterNextRender(() => {
      this.syncThemeState();
      this.trackScrollProgress();
      this.trackActiveSection();
    });
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollHome(): void {
    this.scrollTo('top');
  }

  toggleTheme(): void {
    const next = this.isDark() ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.toggle('dark', next === 'dark');
    root.classList.toggle('light', next === 'light');
    root.style.colorScheme = next;

    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode */
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#04070f' : '#f8fbff');

    this.isDark.set(next === 'dark');
  }

  private syncThemeState(): void {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('theme');
    } catch {
      /* private mode */
    }
    const prefersDark =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(stored === 'dark' || (stored === null && prefersDark));
  }

  private trackScrollProgress(): void {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      this.progress.set(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    });
  }

  private trackActiveSection(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId.set(entry.target.id);
          }
        }
      },
      // a narrow horizontal band around the viewport's upper-middle decides
      // which section is "current", so exactly one wins at a time
      { rootMargin: '-35% 0px -55% 0px' }
    );

    for (const { id } of [{ id: 'top' }, ...this.sections]) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
