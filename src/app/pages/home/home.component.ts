import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-primary-100 md:min-h-screen md:flex md:items-center"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight opacity-0 animate-fade-in-down"
            >
              Платежи стали
              <span class="text-primary-600">проще</span>
            </h1>

            <p
              class="text-xl text-slate-600 leading-relaxed opacity-0 animate-fade-in-down-delay-1"
            >
              VainahPay упрощает отправку, получение и управление платежами.
              Создана для современного мира, обладает передовыми технологиями
              безопасности и обеспечивает мгновенные транзакции.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up-delay-2"
            >
              <button
                type="button"
                routerLink="/about"
                class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Узнать больше
              </button>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative w-80 h-80">
              <!-- Gradient background shapes -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-100 rounded-3xl transform rotate-12 opacity-0 animate-slide-in-rotate"
              ></div>
              <div
                class="absolute inset-0 bg-white rounded-2xl shadow-2xl flex items-center justify-center opacity-0 animate-slide-in-card"
              >
                <div class="text-center">
                  <div
                    class="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <img src="assets/img/logoVP2.png" alt="logo2" />
                  </div>
                  <p class="text-slate-600 font-semibold">Быстро и Безопасно</p>
                  <p class="text-slate-500 text-sm mt-1">Мгновенные расчеты</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why VaynahPay Section -->
    <section class="py-20 px-6">
      <div class="why-choose-section max-w-7xl mx-auto">
        <!-- Header -->
        <div
          class="text-center mb-16 opacity-0 transition-all duration-1000"
          [class.animate-fade-in-down]="isWhyChooseVisible"
        >
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Почему выбирают VainahPay?
          </h2>
          <p class="text-xl text-slate-600">
            Мы специализируемся на оказании широкого спектра услуг как для
            корпоративных клиентов так и для частных лиц. Профессионализм и
            ответственность ключевые преимущества нашей компании.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Choose 1 -->
          <button
            type="button"
            [routerLink]="['/services']"
            fragment="provider"
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all opacity-0"
            [class.animate-slide-up]="isWhyChooseVisible"
            style="animation-delay: 300ms"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="12"
                  y1="11"
                  x2="12"
                  y2="17"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="12"
                  y1="17"
                  x2="6"
                  y2="21"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="12"
                  y1="17"
                  x2="18"
                  y2="21"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Провайдерам (поставщикам услуг)
            </h3>
            <p class="text-slate-600">
              Порядок подключения, Точки приема, Документы, Список сервисов
            </p>
          </button>

          <!-- Choose 2 -->
          <button
            type="button"
            [routerLink]="['/services']"
            fragment="agent"
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white opacity-0"
            [class.animate-slide-up]="isWhyChooseVisible"
            style="animation-delay: 500ms"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7h16v10H4V7zM4 7l2-3h12l2 3M8 12h8M8 16h8M10 7v-2M14 7v-2"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Агентам (владельцам терминалов)
            </h3>
            <p class="text-slate-600">
              Порядок подключения, Список сервисов,, Документы, ПО Vainah Pay
            </p>
          </button>

          <!-- Choose 3 -->
          <button
            type="button"
            [routerLink]="['/services']"
            fragment="list"
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white opacity-0"
            [class.animate-slide-up]="isWhyChooseVisible"
            style="animation-delay: 700ms"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 20v-2a6 6 0 0112 0v2"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Пользователям (физическим лицам)
            </h3>
            <p class="text-slate-600">
              Поиск платежа, Карта терминалов, Список сервисов
            </p>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-gradient-to-r bg-primary-0">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Отправить заявку на подключение
        </h2>
        <p class="p-3 text-xl text-slate-600">
          Менеджеры компании с радостью ответят на ваши вопросы и произведут
          расчет стоимости услуг и подготовят индивидуальное коммерческое
          предложение.
        </p>
        <button
          class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
        >
          Задать вопрос
        </button>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isWhyChooseVisible = false;
  private whyChooseObserver?: IntersectionObserver;

  ngOnInit() {
    this.whyChooseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isWhyChooseVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const section = document.querySelector('.why-choose-section');
      if (section && this.whyChooseObserver) {
        this.whyChooseObserver.observe(section);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.whyChooseObserver) {
      this.whyChooseObserver.disconnect();
    }
  }
}
