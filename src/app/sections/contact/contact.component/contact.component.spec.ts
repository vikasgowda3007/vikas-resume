import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { RESUME } from '../../../core/data/resume-data';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contact', RESUME.contact);
    fixture.componentRef.setInput('links', RESUME.links);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the email centerpiece as a mailto link with a copy button', () => {
    const element: HTMLElement = fixture.nativeElement;
    const emailLink = element.querySelector<HTMLAnchorElement>('.email-link');
    const copyButton = element.querySelector<HTMLButtonElement>('.copy-pill');

    expect(emailLink?.getAttribute('href')).toBe(`mailto:${RESUME.contact.email}`);
    expect(emailLink?.textContent).toContain(RESUME.contact.email);
    expect(copyButton?.textContent?.trim()).toBe('Copy email');
  });

  it('renders LinkedIn as the primary action and the rest as ghost actions', () => {
    const element: HTMLElement = fixture.nativeElement;
    const primary = element.querySelector<HTMLAnchorElement>('.action-row .btn.primary');
    const ghosts = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('.action-row .btn.ghost')
    ).map((link) => link.textContent?.trim());

    expect(primary?.textContent?.trim()).toBe('LinkedIn');
    expect(primary?.getAttribute('href')).toBe(
      'https://linkedin.com/in/vikas-keshavamurthy-b027b1165'
    );
    expect(ghosts).toContain('GitHub');
    expect(ghosts).toContain('Resume PDF');
    expect(ghosts).not.toContain('LinkedIn');
  });

  it('does not load any third-party LinkedIn badge markup', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.linkedin-badge')).toBeNull();
    expect(element.querySelector('.LI-profile-badge')).toBeNull();
    expect(document.getElementById('linkedin-profile-badge-script')).toBeNull();
  });

  it('omits the primary action cleanly when the LinkedIn link is missing', async () => {
    fixture.componentRef.setInput(
      'links',
      RESUME.links.filter((link) => link.label !== 'LinkedIn')
    );
    fixture.detectChanges();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const ghosts = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('.action-row .btn.ghost')
    ).map((link) => link.textContent?.trim());

    expect(element.querySelector('.action-row .btn.primary')).toBeNull();
    expect(ghosts).toContain('GitHub');
    expect(ghosts).toContain('Resume PDF');
  });

  it('copies the email and shows a temporary confirmation', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true
    });

    await component.copyEmail();
    fixture.detectChanges();

    const copyButton = fixture.nativeElement.querySelector('.copy-pill') as HTMLButtonElement;

    expect(writeText).toHaveBeenCalledWith(RESUME.contact.email);
    expect(component.copied()).toBe(true);
    expect(copyButton.textContent?.trim()).toBe('Copied');
  });
});
