import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'angular-hover-gradient-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-hover-gradient-button.component.html',
  styleUrls: ['./angular-hover-gradient-button.component.scss'],
})
export class AngularHoverGradientButton {
  @ViewChild('button') button!: ElementRef;
  @HostBinding('style.--background-color') get bg() {
    return this.backgroundColor;
  }
  @HostBinding('style.--hover-color') get hover() {
    return this.hoverColor;
  }

  @Input() backgroundColor: string = '#1e3799';
  @Input() hoverColor: string = '#78e08f';

  constructor() {}

  onMouseMove(event: MouseEvent): void {
    const rect = this.button.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.button.nativeElement.style.setProperty('--x', `${x}px`);
    this.button.nativeElement.style.setProperty('--y', `${y}px`);
  }
}
