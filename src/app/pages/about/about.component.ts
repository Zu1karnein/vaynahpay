import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <!-- About Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-0 via-white to-primary-100 md:min-h-screen md:flex md:items-center"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Левая колонка с текстом -->
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight opacity-0 animate-fade-in-down"
            >
              VainahPay
            </h1>

            <p
              class="text-lg text-slate-600 leading-relaxed opacity-0 animate-fade-in-down-delay-1"
            >
              Vainah Pay - универсальная электронная платежная система,
              предоставляющая потребителям возможность моментальной электронной
              оплаты товаров, услуг и осуществления денежных переводов. Через
              платежную систему «Vainah Pay» можно оплатить товары и услуги по
              более 2000 поставщикам. В процессе приема платежей АО «Вайнах Пэй»
              выступает в роли процессингового центра, оказывающее
              информационное и технологическое взаимодействие между поставщиком
              услуг и плательщиком.
            </p>
          </div>

          <!-- Правая колонка с карточкой президента -->
          <div
            class="flex justify-center opacity-0 animate-slide-in-from-right"
          >
            <div
              class="max-w-sm p-6 border border-primary-200 rounded-xl text-center shadow-lg bg-primary-100"
            >
              <div class="w-80 h-80 rounded-full mb-4 overflow-hidden">
                <img
                  src="assets/img/SolsaevAS.png"
                  alt="solsaev"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <h3 class="text-lg font-semibold text-slate-900">
                Солсанов Асламбек Султанович
              </h3>
              <p class="text-primary-600 font-semibold text-sm">
                Президент АО "Вайнах Пэй"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stat Section -->
    <section class="py-20">
      <div class="stats-section max-w-7xl mx-auto px-4">
        <!-- head -->
        <div
          class="text-center mb-16 opacity-0 transition-all duration-600"
          [class.animate-fade-in]="isVisible"
        >
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Наши достижения
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Цифры, которые говорят о нашей надежности и масштабе
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Cities -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg text-center opacity-0 transition-all duration-800"
            [class.animate-fade-in-up]="isVisible"
            style="animation-delay: 200ms"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="text-5xl font-bold text-primary-600 mb-3">150+</div>
            <div class="text-slate-600 text-lg font-medium">Городах</div>
          </div>

          <!-- Suppliers -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg text-center opacity-0 transition-all duration-800"
            [class.animate-fade-in-up]="isVisible"
            style="animation-delay: 400ms"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div class="text-5xl font-bold text-primary-600 mb-3">2000+</div>
            <div class="text-slate-600 text-lg font-medium">
              Поставщиков услуг
            </div>
          </div>

          <!-- Support -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg text-center opacity-0 transition-all duration-800"
            [class.animate-fade-in-up]="isVisible"
            style="animation-delay: 600ms"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="text-5xl font-bold text-primary-600 mb-3">24/7</div>
            <div class="text-slate-600 text-lg font-medium">Поддержка</div>
          </div>

          <!-- Year of foundation -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg text-center opacity-0 transition-all duration-800"
            [class.animate-fade-in-up]="isVisible"
            style="animation-delay: 800ms"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div class="text-5xl font-bold text-primary-600 mb-3">2007</div>
            <div class="text-slate-600 text-lg font-medium">Год основания</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requisites -->
    <section id="requisites" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Реквизиты компании
          </h2>
          <p class="text-xl text-slate-600">
            Официальная информация и юридические данные компании
          </p>
        </div>
        <div class="max-w-5xl mx-auto space-y-4">
          <!-- Полное наименование -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Полное наименование:</div>
            <div class="md:col-span-2 text-slate-700">
              Акционерное общество «Вайнах Пэй»
            </div>
          </div>
          <!-- Сокращенное наименование -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white border border-slate-200 rounded-xl"
          >
            <div class="font-semibold text-slate-900">
              Сокращенное наименование:
            </div>
            <div class="md:col-span-2 text-slate-700">АО «Вайнах Пэй»</div>
          </div>
          <!-- ИНН/КПП -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl"
          >
            <div class="font-semibold text-slate-900">ИНН/КПП:</div>
            <div class="md:col-span-2 text-slate-700">2005004411/201301001</div>
          </div>
          <!-- ОРГН -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white border border-slate-200 rounded-xl"
          >
            <div class="font-semibold text-slate-900">ОРГН:</div>
            <div class="md:col-span-2 text-slate-700">1072032000534</div>
          </div>
          <!-- Юридический адрес -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Юридический адрес:</div>
            <div class="md:col-span-2 text-slate-700">
              364046, Чеченская Республика, г. Грозный, ул. Заветы Ильича, д.
              181, кв. 20
            </div>
          </div>
          <!-- Фактический адрес -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white border border-slate-200 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Фактический адрес:</div>
            <div class="md:col-span-2 text-slate-700">
              364024, г. Грозный, ул им. С. Ш. Лорсанова, д. 9, 1-этаж
            </div>
          </div>
          <!-- Телефон, факс -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Телефон, факс:</div>
            <div class="md:col-span-2 text-slate-700">8(8712) 29-39-29</div>
          </div>
          <!-- Электронная почта -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white border border-slate-200 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Электронная почта:</div>
            <div class="md:col-span-2">
              <a
                href="mailto:info@vainahpay.ru"
                class="text-primary-600 hover:text-primary-700 font-semibold"
              >
                info&#64;vainahpay.ru
              </a>
            </div>
          </div>
          <!-- Сайт -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl"
          >
            <div class="font-semibold text-slate-900">Сайт:</div>
            <div class="md:col-span-2">
              <a
                href="http://vainahpay.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 hover:text-primary-700 font-semibold"
              >
                http://vainahpay.ru
              </a>
            </div>
          </div>
          <!-- Банковские реквизиты -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white border border-slate-200 rounded-xl"
          >
            <div class="font-semibold text-slate-900">
              Банковские реквизиты:
            </div>
            <div class="md:col-span-2 text-slate-700 space-y-2">
              <div>Рас./счет: 40702810704450000464</div>
              <div>БАНК: СКРУ ОАО «МИнБ»</div>
              <div>Кор./счет: 30101810800000000703</div>
              <div>БИК: 040702703</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer?: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.2 } // Срабатывает когда 20% секции видно
    );
  }

  ngAfterViewInit() {
    // Небольшая задержка чтобы DOM точно успел загрузиться
    setTimeout(() => {
      const section = document.querySelector('.stats-section');
      if (section && this.observer) {
        this.observer.observe(section);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
