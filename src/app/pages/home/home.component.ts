import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-primary-100"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Payments Made <span class="text-primary-600">Simple</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed">
              VainahPay makes it easy to send, receive, and manage payments.
              Built for the modern world with cutting-edge security and instant
              transactions.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </button>
              <button
                class="border-2 border-slate-300 hover:border-slate-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </button>
            </div>
            <p class="text-sm text-slate-500">
              No credit card required. Join thousands of users worldwide.
            </p>
          </div>

          <!-- Hero Visual -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative w-80 h-80">
              <!-- Gradient background shapes -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-100 rounded-3xl transform rotate-12"
              ></div>
              <div
                class="absolute inset-0 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <div class="text-center">
                  <div
                    class="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <img src="assets/logoVP2.png" alt="logo2" />
                  </div>
                  <p class="text-slate-600 font-semibold">Fast & Secure</p>
                  <p class="text-slate-500 text-sm mt-1">Instant settlements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose VainahPay
          </h2>
          <p class="text-xl text-slate-600">
            Everything you need for modern payments in one platform
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Competitive Rates
            </h3>
            <p class="text-slate-600">
              Industry-leading rates with no hidden fees. Transparent pricing
              for all transactions.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Bank-Level Security
            </h3>
            <p class="text-slate-600">
              Advanced encryption and fraud detection keep your money safe 24/7.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Instant Transfers
            </h3>
            <p class="text-slate-600">
              Send and receive money in seconds. Real-time settlement to your
              account.
            </p>
          </div>

          <!-- Feature 4 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Fully Verified
            </h3>
            <p class="text-slate-600">
              Regulatory compliant and audited. Your payments are protected by
              law.
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Easy API</h3>
            <p class="text-slate-600">
              Simple integration with excellent documentation. Get started in
              minutes.
            </p>
          </div>

          <!-- Feature 6 -->
          <div
            class="group p-8 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white"
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              24/7 Support
            </h3>
            <p class="text-slate-600">
              Dedicated support team available round the clock to help you
              succeed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="contact"
      class="py-20 px-6 bg-gradient-to-r from-primary-600 to-primary-700"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          Join thousands of users who are simplifying their payments with
          VainahPay.
        </p>
        <button
          class="bg-white hover:bg-slate-100 text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
        >
          Create Account Now
        </button>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent {}
