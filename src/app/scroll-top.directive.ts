import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTop]',
})
export class ScrollTopDirective {
  private button!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

    this.button = this.renderer.createElement('button');
    this.button.innerHTML = '⬆️';
    this.renderer.addClass(this.button, 'scroll-top-btn');
    this.renderer.setStyle(this.button, 'display', 'none');
    this.renderer.appendChild(document.body, this.button);


    this.button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 200) {
      this.renderer.setStyle(this.button, 'display', 'block');
    } else {
      this.renderer.setStyle(this.button, 'display', 'none');
    }
  }
}

