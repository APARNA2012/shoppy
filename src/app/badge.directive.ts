import { DOCUMENT } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective implements OnInit, OnChanges {

  badgeElement: HTMLSpanElement | undefined
  @Input()appBadge:string|number=0
  constructor(
    // to create a badge element (HTML ELEMENT - SPAN)
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.badgeElement){
    this.badgeElement.innerText=`${this.appBadge}`
    }
  }

  ngOnInit() {
    this.createBadgeElement()
    this.appendBadgeToView()
  }

  createBadgeElement() {
    const el: HTMLSpanElement = this.renderer.createElement('span')
    el.innerText=`${this.appBadge}`
    this.renderer.addClass(el, 'app-badge')
    this.badgeElement = el
    
    
  }

  appendBadgeToView() {
    if (this.badgeElement) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.badgeElement);
    }
  }
  
}


