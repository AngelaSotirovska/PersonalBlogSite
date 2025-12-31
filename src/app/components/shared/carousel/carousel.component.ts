import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-carousel',
  imports: [Button],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = input.required<string[]>();

  currentIndex = 0;

  prev() {
    this.currentIndex =
      this.currentIndex === this.images().length - 1
        ? 0
        : this.currentIndex + 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.images().length - 1
        : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
