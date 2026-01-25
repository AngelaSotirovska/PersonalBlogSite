import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { ViewportScroller } from '@angular/common';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toast],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly router = inject(Router);

  showScrollTopButton = false;

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd),
      )
      .subscribe((event) => {
        const url = event.urlAfterRedirects;
        if (url.includes('#')) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    this.viewportScroller.scrollToPosition([0, 0]);

    this.router.navigate([]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton = window.pageYOffset > 200;
  }
}
