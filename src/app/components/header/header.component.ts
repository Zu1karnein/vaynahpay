import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <!-- Logo -->
        <a
          routerLink="/"
          (click)="scrollToTop()"
          class="flex items-center gap-2"
        >
          <img
            class="w-[12rem] h-auto"
            src="assets/logoVP1.png"
            alt="VainahPayLogo"
          />
        </a>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            routerLink="/"
            (click)="scrollToTop()"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="relative text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
            <!-- Полоска -->
            <span
              class="absolute left-0 -bottom-1 w-full h-[2px] bg-primary-600 scale-x-0 origin-left transition-transform duration-300 ease-in-out"
            ></span>
          </a>

          <a
            routerLink="/about"
            (click)="scrollToTop()"
            routerLinkActive="active-link"
            class="relative text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
            <span
              class="absolute left-0 -bottom-1 w-full h-[2px] bg-primary-600 scale-x-0 origin-left transition-transform duration-300 ease-in-out"
            ></span>
          </a>

          <a
            href="#contact"
            class="relative text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
            <span
              class="absolute left-0 -bottom-1 w-full h-[2px] bg-primary-600 scale-x-0 origin-left transition-transform duration-300 ease-in-out"
            ></span>
          </a>
        </nav>

        <!-- CTA Button -->
        <button
          class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Get Started
        </button>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
