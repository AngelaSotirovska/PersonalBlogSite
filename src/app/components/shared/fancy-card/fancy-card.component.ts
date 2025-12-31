import { Component, input } from '@angular/core';
import { Image } from '../../../app.models';

@Component({
  selector: 'app-fancy-card',
  imports: [],
  templateUrl: './fancy-card.component.html',
  styleUrl: './fancy-card.component.scss',
})
export class FancyCardComponent {
  title = input.required<string>();
  image = input.required<Image>();
}
