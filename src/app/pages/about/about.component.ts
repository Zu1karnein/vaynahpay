import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <!-- About Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-0 via-white to-primary-100"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              VainahPay
            </h1>

            <p class="text-lg text-slate-600 leading-relaxed">
              Vainah Pay - универсальная электронная платежная система,
              предоставляющая потребителям возможность моментальной электронной
              оплаты товаров, услуг и осуществления денежных переводов. Через
              платежную систему «Vainah Pay» можно оплатить товары и услуги по
              более 2000 поставщикам. В процессе приема платежей АО «Вайнах Пэй»
              выступает в роли процессингового центра, оказывающее
              информационное и технологическое взаимодействие между поставщиком
              услуг и плательщиком.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">150+</div>
                <div class="text-slate-600">Городах</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">2000+</div>
                <div class="text-slate-600">Поставщиков услуг</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">24/7</div>
                <div class="text-slate-600">Поддержка</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">2007</div>
                <div class="text-slate-600">Год основания</div>
              </div>
            </div>
          </div>

          <!-- Visual Card -->
          <div class="hidden lg:flex items-center justify-center">
            <div
              class="w-80 h-80 bg-primary-100 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div class="text-center">
                <div
                  class="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <img src="assets/logoVP2.png" alt="logo2" />
                </div>
                <p class="text-slate-600 font-semibold">Lightning Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Management -->
    <section id="management" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Руководство компании
          </h2>
        </div>

        <div class="flex justify-center">
          <div
            class="w-full max-w-sm p-6 border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-80 h-80 rounded-full mx-auto mb-4 overflow-hidden border-4 border-slate-100"
            >
              <img
                src="assets/SolsaevAS.png"
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
    </section>

    <!-- Partners -->
    <section id="partners" class="py-20 px-6 bg-primary-0">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Партнеры
          </h2>
          <p class="text-xl text-slate-600">
            Нам доверяют ведущие компании по всей стране.
          </p>
        </div>
        <div class="space-y-12"></div>
      </div>

      <!-- first group -->
      <div class="py-6">
        <h3 class="text-2xl font-bold text-slate-900 mb-6 text-center">
          Стратегические партнеры
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class=" p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="https://www.vtb.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/VTB.png" alt="VTB" />
              </div>
              <h3 class="font-semibold text-slate-900">ПАО ВТБ Банк</h3>
            </a>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="https://www.sberbank.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/SBER.png" alt="SBER" />
              </div>
              <h3 class="font-semibold text-slate-900">ПАО "СБЕРБАНК"</h3>
            </a>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="http://www.vainahtelecom.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/vaynahtelecom.png" alt="vaynahtelekom" />
              </div>
              <h3 class="font-semibold text-slate-900">ЗАО «Вайнах Телеком»</h3>
            </a>
          </div>
        </div>
      </div>

      <!-- second group -->
      <div>
        <h3 class="text-2xl font-bold text-slate-900 mb-6 text-center">
          Постоянные партнеры
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="http://telepay.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/telepay.png" alt="telepay" />
              </div>
              <h3 class="font-semibold text-slate-900">ООО «УЦИПС»</h3>
            </a>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="https://www.rapida.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/rapida.png" alt="rapida" />
              </div>
              <h3 class="font-semibold text-slate-900">ООО НКО «Рапида»</h3>
            </a>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <a
              href="https://www.anelik.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img src="assets/anelik.png" alt="anelik" />
              </div>
              <h3 class="font-semibold text-slate-900">ООО КБ «Анелик»</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
        >
          <a
            href="http://www.beeonline.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <img src="assets/beeonline.png" alt="beeonline" />
            </div>
            <h3 class="font-semibold text-slate-900">ПАО "Вымпелком"</h3>
          </a>
        </div>
        <div
          class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
        >
          <a
            href="https://chechnya.megafon.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <img src="assets/megafon.png" alt="megafon" />
            </div>
            <h3 class="font-semibold text-slate-900">ПАО "Мегафон"</h3>
          </a>
        </div>
        <div
          class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
        >
          <a
            href="http://webmaster95.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <img src="assets/webmaster95.png" alt="webmaster95" />
            </div>
            <h3 class="font-semibold text-slate-900">ООО "ВЕБМАСТЕР95"</h3>
          </a>
        </div>
      </div>
    </section>

    <!-- Requisites -->
    <section id="requisites" class="py-20 px-6 bg-white">
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
export class AboutComponent {}
