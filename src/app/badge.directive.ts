import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BadgeSizes, BadgePositions, BadgeVariants } from './badge.interface';

@Directive({
  selector: '[badge]',
})
export class Badge implements OnChanges, OnDestroy {
  @Input() badge = '0';
  @Input() size: BadgeSizes = 'medium';
  @Input() position: BadgePositions = 'top-right';
  @Input() customBadgeClasses: string | null = null;
  @Input() variant: BadgeVariants = 'secondary';

  badgeElement: HTMLElement | null = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elRef: ElementRef<HTMLElement>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if ('badge' in changes) {
      const value = `${changes['badge'].currentValue}`.trim();
      if (value?.length > 0) {
        this.updateBadgeText(value);
      }
    }
    if ('position' in changes) {
      
      const [prevVPosition,prevHPosition] = `${changes['position'].currentValue}`.trim().split('-');
      this.badgeElement?.classList.remove(prevVPosition);
      this.badgeElement?.classList.remove(prevHPosition);
      console.log(this.badgeElement?.classList)
      const value = `${changes['position'].currentValue}`.trim();
      const [vPos, hPos] = value.split('-');
      this.badgeElement?.classList.add('badge', vPos, hPos);
    }
  }

  ngOnDestroy() {
    if (this.badgeElement) {
      this.badgeElement.remove();
    }
  }

  private updateBadgeText(value: string) {
    if (!this.badgeElement) {
      this.badgeElement = this.createBadge(value);
    } else {
      this.badgeElement.textContent = value;
    }
  }

  private createBadge(value: string): HTMLElement {
    const badgeElement = this.document.createElement('span');
    this.addClasses(badgeElement);
    badgeElement.textContent = value;
    this.elRef.nativeElement.classList.add('badge-container');
    this.elRef.nativeElement.appendChild(badgeElement);
    return badgeElement;
  }

  private addClasses(badgeElement: HTMLElement) {
    const [vPos, hPos] = this.position.split('-');
    badgeElement.classList.add('badge', vPos, hPos);
    if (this.customBadgeClasses) {
      const customClasses = this.customBadgeClasses.split(' ');
      badgeElement.classList.add(...customClasses);
    }
    badgeElement.classList.add(this.variant);
    badgeElement.classList.add(this.size);
  }
}
