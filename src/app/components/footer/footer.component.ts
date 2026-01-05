import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <img
                class="w-[10rem] h-auto"
                src="assets/logoVP1.png"
                alt="VainahPayLogo"
              />
            </div>
            <p class="text-slate-400 text-sm">
              номер лицензии: 000-000-000 регистрационный номер: 000-000-000
            </p>
          </div>

          <div>
            <ul class="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Компания</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Услуги</a
                >
              </li>
              <li>
                <a
                  routerLink="/about"
                  (click)="scrollToTop()"
                  class="hover:text-white transition-colors"
                  >Контакты</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-slate-800 pt-8">
          <!-- Bottom Section -->
          <div
            class="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          >
            <p>&copy; 2© 2026 Vainah Pay АО "Вайнах Пэй" Все права защищены.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
              <a href="#" class="hover:text-white transition-colors"
                >LinkedIn</a
              >
              <a href="#" class="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
