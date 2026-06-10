import { DestroyRef, Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

/**
 * Adds a scroll-triggered entrance to any element.
 * Runs only in the browser (afterNextRender), so prerendered HTML stays fully
 * visible without JavaScript and hydration markup is untouched on the server.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective {
  @Input('appReveal') delay: number | string = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.arm());
  }

  private arm(): void {
    const node = this.el.nativeElement as HTMLElement;
    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const delayMs = Number(this.delay) || 0;
    if (delayMs > 0) {
      node.style.setProperty('--reveal-delay', `${delayMs}ms`);
    }
    node.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-inview');
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
