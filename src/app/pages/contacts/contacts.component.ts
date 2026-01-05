import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section
      class="flex flex-col items-center justify-center h-screen bg-white text-slate-900 px-6"
    >
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <h2 class="text-3xl mb-6">Такой страницы нет :(</h2>
      <p class="text-lg text-slate-600 mb-6">
        Неправильно набран адрес или такой страницы не существует
      </p>
      <button
        routerLink="/"
        class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
      >
        На главную
      </button>
    </section>
  `,
})
export class ContactsComponent {}
