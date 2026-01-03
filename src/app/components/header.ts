import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
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
            class="text-slate-600 hover:text-slate-900 transition-colors"
            >Home</a
          >
          <a
            href="#features"
            class="text-slate-600 hover:text-slate-900 transition-colors"
            >Features</a
          >
          <a
            href="#contact"
            class="text-slate-600 hover:text-slate-900 transition-colors"
            >Contact</a
          >
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
