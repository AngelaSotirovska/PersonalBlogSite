import { Component, inject, input } from '@angular/core';
import { NgTemplateOutlet, ViewportScroller } from '@angular/common';
import { AppService } from '../../app.service';
import { ContactInfo } from '../../app.models';

@Component({
  selector: 'app-header',
  imports: [NgTemplateOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  fullMenu = input(true);
  private readonly appService = inject(AppService);
  protected readonly contactInfos = this.appService.requestObject<ContactInfo>(
    'assets/data/contact-info.json',
  );

  menuOpen = false;

  toggle() {
    this.menuOpen = !this.menuOpen;
  }
}
