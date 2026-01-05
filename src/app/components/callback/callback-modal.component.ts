import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-callback-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Overlay -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4"
      (click)="close()"
    >
      >
      <!-- Modal Content -->
      <div
        class="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
        (click)="$event.stopPropagation()"
      >
        <!-- Close Button -->
        <button
          (click)="close()"
          class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Header -->
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-8 h-8 text-white"
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
            <h2 class="text-2xl font-bold text-slate-900">Обратный звонок</h2>
            <p class="text-slate-600 text-sm">
              Представьтесь, мы вам перезвоним.
            </p>
          </div>
        </div>

        <!-- Form -->
        <form (ngSubmit)="onSubmit()" class="space-y-4">
          <!-- Name Input -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">
              Ваше имя: <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                type="text"
                [(ngModel)]="formData.name"
                name="name"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите ваше имя"
              />
              <div
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Phone Input -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">
              Телефон: <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                type="tel"
                [(ngModel)]="formData.phone"
                name="phone"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="+7 (___) ___-__-__"
              />
              <div
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  class="w-5 h-5"
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
            </div>
          </div>

          <!-- Captcha -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">
              Введите код: <span class="text-red-500">*</span>
            </label>
            <div class="flex gap-3">
              <div class="flex-shrink-0">
                <img
                  [src]="captchaImage"
                  alt="Captcha"
                  class="h-12 border border-slate-300 rounded-lg"
                />
                <button
                  type="button"
                  (click)="refreshCaptcha()"
                  class="text-xs text-green-600 hover:text-green-700 mt-1 font-semibold"
                >
                  Поменять картинку
                </button>
              </div>
              <input
                type="text"
                [(ngModel)]="formData.captcha"
                name="captcha"
                required
                class="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите код"
              />
            </div>
          </div>

          <!-- Info Text -->
          <div class="flex items-start gap-2 text-xs text-slate-500 pt-2">
            <svg
              class="w-4 h-4 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span>- Обязательные поля</span>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  `,
})
export class CallbackModalComponent implements OnInit {
  isOpen = false;

  formData = {
    name: '',
    phone: '',
    captcha: '',
  };
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.openCallbackModal$.subscribe(() => {
      this.open();
    });
  }

  captchaImage =
    'https://via.placeholder.com/150x50/cccccc/333333?text=CAPTCHA';

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.resetForm();
  }

  refreshCaptcha() {
    // Здесь должна быть логика обновления капчи
    this.captchaImage = `https://via.placeholder.com/150x50/cccccc/333333?text=CAPTCHA&t=${Date.now()}`;
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Здесь добавьте логику отправки формы
    alert('Спасибо! Мы вам перезвоним.');
    this.close();
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      captcha: '',
    };
  }
}
