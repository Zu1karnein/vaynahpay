import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2">
          <img
            class="w-[10rem] md:w-[12rem] h-auto"
            src="assets/img/logoVP1.png"
            alt="VainahPayLogo"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            routerLink="/"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            Главная <span class="nav-underline"></span>
          </a>

          <a
            routerLink="/about"
            routerLinkActive="active-link"
            class="nav-link"
          >
            О Компании <span class="nav-underline"></span>
          </a>

          <a routerLink="/news" routerLinkActive="active-link" class="nav-link">
            Новости <span class="nav-underline"></span>
          </a>

          <a
            routerLink="/contacts"
            routerLinkActive="active-link"
            class="nav-link"
          >
            Контакты <span class="nav-underline"></span>
          </a>

          <a
            routerLink="/services"
            routerLinkActive="active-link"
            class="nav-link"
          >
            Услуги <span class="nav-underline"></span>
          </a>

          <a
            href="https://cp.vainahpay.ru/server/login.seam?cid=21125"
            class="nav-link"
          >
            Личный кабинет Агента
            <span class="nav-underline"></span>
          </a>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <!-- CTA -->
          <button
            (click)="openModal()"
            class="hidden md:block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Заказать звонок
          </button>

          <!-- Burger -->
          <button
            class="md:hidden text-slate-700 text-2xl"
            (click)="toggleMenu()"
            aria-label="Открыть меню"
          >
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->

      @if (menuOpen) {
      <div
        class="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-5"
      >
        <a
          routerLink="/"
          routerLinkActive="active-link"
          [routerLinkActiveOptions]="{ exact: true }"
          class="block nav-link"
        >
          Главная <span class="nav-underline"></span>
        </a>

        <a
          routerLink="/about"
          routerLinkActive="active-link"
          class="block nav-link"
        >
          О Компании <span class="nav-underline"></span>
        </a>

        <a
          routerLink="/contacts"
          routerLinkActive="active-link"
          class="block nav-link"
        >
          Контакты <span class="nav-underline"></span>
        </a>

        <a
          routerLink="/services"
          routerLinkActive="active-link"
          class="block nav-link"
        >
          Услуги <span class="nav-underline"></span>
        </a>

        <a
          href="https://cp.vainahpay.ru/server/login.seam?cid=21125"
          class="block nav-link"
        >
          Личный кабинет Агента
          <span class="nav-underline"></span>
        </a>

        <button
          (click)="openModal(); menuOpen = false"
          class="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Заказать звонок
        </button>
      </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private modalService: ModalService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openModal() {
    this.modalService.openCallbackModal();
  }
}
