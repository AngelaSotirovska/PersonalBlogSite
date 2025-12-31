import { Component, input } from '@angular/core';
import { Image } from '../../../app.models';

@Component({
  selector: 'app-teaser',
  imports: [],
  templateUrl: './teaser.component.html',
  styleUrl: './teaser.component.scss',
})
export class TeaserComponent {
  title = input.required<string>();
  description = input.required<string>();
  image = input.required<Image>();
}
