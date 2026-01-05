import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  template: `
    <!-- Contacts Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-primary-100"
    >
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Контакты
          </h1>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">VainahPay</h2>
          <p class="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            В салонах компании представлены не только технические новинки, но и
            широкий выбор дополнительных услуг.
          </p>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Left Side - Contact Info -->
          <div class="flex flex-col h-full">
            <!-- Contact Cards -->
            <div class="space-y-4 flex-grow">
              <!-- Address -->
              <div
                class="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div
                  class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
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
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1">Адрес</h3>
                  <p class="text-sm text-slate-600">
                    364046, Чеченская Республика, г. Грозный, ул. Лорсанова 9
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div
                class="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div
                  class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1">Телефон</h3>
                  <a
                    href="tel:+78712293929"
                    class="text-sm text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    +7 (8712) 29-39-29
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div
                class="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div
                  class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1">E-mail</h3>
                  <a
                    href="mailto:info@vainahpay.ru"
                    class="text-sm text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    info&#64;vainahpay.ru
                  </a>
                </div>
              </div>

              <!-- Working Hours -->
              <div
                class="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div
                  class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
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
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1">
                    Режим работы
                  </h3>
                  <p class="text-sm text-slate-600">
                    Пн. – Пт.: с 9:00 до 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Map -->
          <div class="h-full min-h-[500px] lg:min-h-0">
            <div
              class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg h-full"
            >
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A23d0f43f4fc8914a990e13ab533760d883058aa2bcc18fcee344cebac957c617&amp;source=constructor"
                width="100%"
                height="100%"
                frameborder="0"
                class="w-full h-full min-h-[500px]"
                title="Карта расположения VainahPay"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Additional Info Section -->
        <div class="mt-12 p-6 bg-white rounded-xl border border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-3">Как нас найти</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Наш офис находится в центре города Грозный на улице Лорсанова. Мы
            работаем с понедельника по пятницу с 9:00 до 18:00. Для уточнения
            информации вы можете связаться с нами по телефону или электронной
            почте.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ContactsComponent {}
