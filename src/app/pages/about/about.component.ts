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
              About VainahPay
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
                <div class="text-4xl font-bold text-primary-600">50K+</div>
                <div class="text-slate-600">Active Users</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">$500M+</div>
                <div class="text-slate-600">Transactions</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">150+</div>
                <div class="text-slate-600">Countries</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">99.9%</div>
                <div class="text-slate-600">Uptime</div>
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
            Company Management
          </h2>
          <p class="text-xl text-slate-600">
            Meet our leadership team driving innovation forward
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="p-6 border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
            >
              👔
            </div>
            <h3 class="text-lg font-semibold text-slate-900">Alexei Volkov</h3>
            <p class="text-primary-600 font-semibold text-sm">
              Chief Executive Officer
            </p>
            <p class="text-slate-600 text-sm mt-2">
              Visionary leader with 15+ years in fintech
            </p>
          </div>

          <div
            class="p-6 border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
            >
              💻
            </div>
            <h3 class="text-lg font-semibold text-slate-900">Marina Petrov</h3>
            <p class="text-primary-600 font-semibold text-sm">
              Chief Technology Officer
            </p>
            <p class="text-slate-600 text-sm mt-2">
              Expert in blockchain and security
            </p>
          </div>

          <div
            class="p-6 border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
            >
              💰
            </div>
            <h3 class="text-lg font-semibold text-slate-900">Dmitri Sokolov</h3>
            <p class="text-primary-600 font-semibold text-sm">
              Chief Financial Officer
            </p>
            <p class="text-slate-600 text-sm mt-2">
              Financial strategist with global experience
            </p>
          </div>

          <div
            class="p-6 border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
            >
              ⚙️
            </div>
            <h3 class="text-lg font-semibold text-slate-900">
              Natalia Kovaleva
            </h3>
            <p class="text-primary-600 font-semibold text-sm">
              Chief Operations Officer
            </p>
            <p class="text-slate-600 text-sm mt-2">
              Operations expert scaling infrastructure
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
            Our Partners
          </h2>
          <p class="text-xl text-slate-600">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center"
            >
              💳
            </div>
            <h3 class="font-semibold text-slate-900">Global Bank Corp</h3>
            <p class="text-slate-500 text-sm">Banking Partner</p>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center"
            >
              ⚡
            </div>
            <h3 class="font-semibold text-slate-900">TechFlow Systems</h3>
            <p class="text-slate-500 text-sm">Technology Partner</p>
          </div>

          <div
            class="p-6 bg-white border border-slate-200 rounded-xl text-center hover:shadow-lg transition-all"
          >
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center"
            >
              🔒
            </div>
            <h3 class="font-semibold text-slate-900">SecureNet Ltd</h3>
            <p class="text-slate-500 text-sm">Security Partner</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requisites -->
    <section id="requisites" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Requisites & Legal
          </h2>
          <p class="text-xl text-slate-600">
            Official company details and legal information
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 border border-slate-200 rounded-xl">
            <h3 class="text-lg font-semibold text-slate-900 mb-4">
              Company Details
            </h3>
            <div class="space-y-2 text-sm text-slate-600">
              <div><strong>Name:</strong> VainahPay LLC</div>
              <div><strong>Reg #:</strong> 7702847520</div>
              <div><strong>INN:</strong> 7702847520</div>
              <div><strong>PSRN:</strong> 1067760000001</div>
            </div>
          </div>

          <div class="p-6 border border-slate-200 rounded-xl">
            <h3 class="text-lg font-semibold text-slate-900 mb-4">
              Legal Docs
            </h3>
            <div class="space-y-2">
              <a
                class="block text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                📄 Terms of Service
              </a>
              <a
                class="block text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                📄 Privacy Policy
              </a>
              <a
                class="block text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                📄 Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
