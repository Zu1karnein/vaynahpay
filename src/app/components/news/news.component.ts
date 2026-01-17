import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-0 via-white to-primary-100"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1
          class="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 opacity-0 animate-fade-in-down"
        >
          Новости VainahPay
        </h1>
        <p
          class="text-xl text-slate-600 max-w-3xl mx-auto opacity-0 animate-fade-in-down-delay-1"
        >
          Будьте в курсе последних событий, обновлений и достижений нашей
          компании
        </p>
      </div>
    </section>

    <!-- Featured News -->
    @if (featuredNews) {
      <section class="py-16 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div
            class="news-featured-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0"
            [class.animate-fade-scale]="isFeaturedVisible"
          >
            <div class="order-2 lg:order-1">
              <span
                class="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
              >
                {{ featuredNews.category }}
              </span>
              <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                {{ featuredNews.title }}
              </h2>
              <p class="text-slate-600 text-lg mb-4">
                {{ featuredNews.excerpt }}
              </p>
              <div class="flex items-center gap-4 text-slate-500 mb-6">
                <span>📅 {{ featuredNews.date }}</span>
              </div>
              <button
                class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Читать полностью
              </button>
            </div>
            <div class="order-1 lg:order-2">
              <div
                class="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-100 to-primary-200 h-96 flex items-center justify-center"
              >
                @if (featuredNews.image) {
                  <img
                    [src]="featuredNews.image"
                    [alt]="featuredNews.title"
                    class="w-full h-full object-cover"
                  />
                } @else {
                  <div class="text-primary-600 text-6xl">📰</div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    }

    <!-- All News -->
    <section
      class="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-primary-50"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Все новости</h2>
        </div>

        <div
          class="news-grid-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          @for (news of allNews; track news.id) {
            <article
              class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
              [class.animate-fade-scale]="isNewsGridVisible"
              [style.animation-delay]="$index * 100 + 100 + 'ms'"
            >
              <div
                class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
              >
                @if (news.image) {
                  <img
                    [src]="news.image"
                    [alt]="news.title"
                    class="w-full h-full object-cover"
                  />
                } @else {
                  <div class="text-primary-600 text-5xl">📰</div>
                }
              </div>
              <div class="p-6">
                <span
                  class="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold mb-3"
                >
                  {{ news.category }}
                </span>
                <h3 class="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {{ news.title }}
                </h3>
                <p class="text-slate-600 mb-4 line-clamp-3">
                  {{ news.excerpt }}
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 text-sm">📅 {{ news.date }}</span>
                  <button
                    class="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    Читать →
                  </button>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Newsletter Subscribe -->
    <section
      class="py-20 px-6 bg-gradient-to-br from-primary-600 to-primary-700"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Подпишитесь на рассылку новостей
        </h2>
        <p class="text-primary-100 text-lg mb-8">
          Получайте последние новости и обновления прямо на вашу почту
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ваш email"
            class="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Подписаться
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export class NewsComponent implements OnInit, OnDestroy, AfterViewInit {
  isFeaturedVisible = false;
  isNewsGridVisible = false;

  private featuredObserver?: IntersectionObserver;
  private newsGridObserver?: IntersectionObserver;

  featuredNews: NewsItem | null = {
    id: 1,
    title: 'VainahPay расширяет географию присутствия',
    date: '14 января 2026',
    category: 'Развитие',
    excerpt:
      'Мы рады сообщить об открытии новых точек обслуживания в 15 городах России. Теперь наши услуги доступны еще большему количеству клиентов.',
    featured: true,
  };

  allNews: NewsItem[] = [
    {
      id: 2,
      title: 'Новый интерфейс личного кабинета агента',
      date: '10 января 2026',
      category: 'Обновление',
      excerpt:
        'Представляем обновленный интерфейс личного кабинета с улучшенной навигацией и новыми функциями для удобства работы.',
      image: 'assets/img/news/cabinet.jpg', // Пример с картинкой
    },
    {
      id: 3,
      title: 'VainahPay получил награду за инновации',
      date: '5 января 2026',
      category: 'Достижения',
      excerpt:
        'Наша компания признана лучшей платежной системой года по версии финансовой ассоциации.',
      // Без картинки - будет иконка
    },
    {
      id: 4,
      title: 'Партнерство с крупнейшими банками',
      date: '28 декабря 2025',
      category: 'Партнерство',
      excerpt:
        'Подписаны соглашения о сотрудничестве с ведущими банками России для расширения спектра услуг.',
      image: 'assets/img/news/partnership.jpg',
    },
    {
      id: 5,
      title: 'Снижение комиссий для постоянных клиентов',
      date: '20 декабря 2025',
      category: 'Акции',
      excerpt:
        'С 1 января 2026 года действуют новые сниженные тарифы для клиентов с высоким объемом транзакций.',
      // Без картинки
    },
    {
      id: 6,
      title: 'Мобильное приложение VainahPay',
      date: '15 декабря 2025',
      category: 'Продукты',
      excerpt:
        'Скоро запуск мобильного приложения для iOS и Android с полным функционалом платежной системы.',
      image: 'assets/img/news/mobile-app.jpg',
    },
    {
      id: 7,
      title: 'Круглосуточная поддержка клиентов',
      date: '10 декабря 2025',
      category: 'Сервис',
      excerpt:
        'Теперь наша служба поддержки работает 24/7 для решения любых вопросов наших клиентов.',
      // Без картинки
    },
  ];

  ngOnInit() {
    this.featuredObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isFeaturedVisible = true;
          }
        });
      },
      { threshold: 0.2 },
    );

    this.newsGridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isNewsGridVisible = true;
          }
        });
      },
      { threshold: 0.1 },
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const featuredSection = document.querySelector('.news-featured-section');
      if (featuredSection && this.featuredObserver) {
        this.featuredObserver.observe(featuredSection);
      }

      const newsGridSection = document.querySelector('.news-grid-section');
      if (newsGridSection && this.newsGridObserver) {
        this.newsGridObserver.observe(newsGridSection);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.featuredObserver) {
      this.featuredObserver.disconnect();
    }
    if (this.newsGridObserver) {
      this.newsGridObserver.disconnect();
    }
  }
}
