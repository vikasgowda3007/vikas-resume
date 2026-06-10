import { DestroyRef, Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

/**
 * Draws SVG strokes on when the element scrolls into view.
 *
 * Apply to an <svg> (or any wrapper): every stroked shape inside gets its
 * dash length measured, hidden, then animated to full length. Runs only in
 * the browser (afterNextRender), so prerendered HTML ships fully drawn and
 * stays visible without JavaScript.
 */
@Directive({
  selector: '[appDrawPath]',
  standalone: true
})
export class DrawPathDirective {
  /** Delay before the draw starts, in ms. */
  @Input('appDrawPath') delay: number | string = 0;

  /** Duration of the draw, in ms. */
  @Input() drawDuration: number | string = 1100;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.arm());
  }

  private arm(): void {
    const host = this.el.nativeElement as HTMLElement;
    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const shapes = Array.from(
      host.querySelectorAll<SVGGeometryElement>('path, circle, line, polyline, ellipse, rect')
    ).filter((shape) => typeof shape.getTotalLength === 'function' && this.isStroked(shape));

    if (!shapes.length) {
      return;
    }

    const delayMs = Number(this.delay) || 0;
    const durationMs = Number(this.drawDuration) || 1100;

    for (const shape of shapes) {
      const length = Math.ceil(shape.getTotalLength());
      shape.style.strokeDasharray = `${length}`;
      shape.style.strokeDashoffset = `${length}`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          shapes.forEach((shape, i) => {
            // stagger sibling shapes slightly so multi-stroke marks feel hand-drawn
            shape.style.transition = `stroke-dashoffset ${durationMs}ms cubic-bezier(0.45, 0, 0.2, 1) ${delayMs + i * 140}ms`;
            shape.style.strokeDashoffset = '0';
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(host);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private isStroked(shape: SVGGeometryElement): boolean {
    if (shape.getAttribute('stroke') === 'none') {
      return false;
    }
    const stroke = getComputedStyle(shape).stroke;
    return stroke !== 'none' && stroke !== '';
  }
}
