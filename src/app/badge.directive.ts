import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appBadge]',
})
export class BadgeDirective implements OnInit {
  badgeElement: HTMLSpanElement | undefined

  constructor(
    // to create a badge element (HTML ELEMENT - SPAN)
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    this.createBadgeElement()
    this.appendBadgeToView()
  }

  createBadgeElement() {
    const el: HTMLSpanElement = this.renderer.createElement('span')
    this.renderer.addClass(el, 'app-badge')
    this.renderer.setStyle(this.elementRef, 'position', 'relative')
    this.badgeElement = el
  }

  appendBadgeToView() {
    if (this.badgeElement) {
      this.renderer.appendChild(this.elementRef, this.badgeElement)
    }
  }
}
