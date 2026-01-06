import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <!-- Providers and Users -->
    <section
      class="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-100 via-white to-primary-200"
    >
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Список сервисов
          </h2>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Сотовая связь -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Сотовая связь
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>МТС</li>
              <li>Билайн</li>
              <li>Мегафон</li>
              <li>Теле2</li>
            </ul>
          </div>

          <!-- Интернет и IP телефония -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Интернет и IP телефония
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>ВайнахТелеком</li>
              <li>KabINET</li>
              <li>Планета (Комтехцентр)</li>
            </ul>
          </div>

          <!-- Коммунальные платежи -->
          <div
            class="p-6 border  bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Коммунальные платежи
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>АО «Чеченэнерго»</li>
              <li>ЗАО «Чеченрегионгаз»</li>
            </ul>
          </div>

          <!-- Домашняя связь -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Домашняя связь
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>Электросвязь</li>
              <li>ВайнахТелеком</li>
            </ul>
          </div>

          <!-- Коммерческое телевидение -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Коммерческое телевидение
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>НТВ+</li>
              <li>Триколор ТВ</li>
              <li>Континент ТВ</li>
              <li>Телекарта</li>
            </ul>
          </div>

          <!-- ГИБДД и госпошлины -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              ГИБДД и госпошлины
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>Федеральная Налоговая Служба</li>
              <li>Штрафы ГИБДД</li>
              <li>ФГБУ ФКП Росреестр</li>
            </ul>
          </div>

          <!-- Кредиты -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Кредиты и пополнение
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>Пополнение карт банков РФ</li>
              <li>Кошелек TelePay Онлайн</li>
              <li>WebMoney</li>
              <li>Яндекс</li>
            </ul>
          </div>

          <!-- Прочие -->
          <div
            class="p-6 border bg-white border-slate-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold text-slate-900 mb-4">
              Прочие услуги
            </h3>
            <ul class="space-y-2 text-slate-600">
              <li>Орифлэйм — оплата заказов</li>
              <li>Avon</li>
              <li>Платежи по свободным реквизитам</li>
              <li>Платежи по свободным реквизитам (в бюджет)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 px-6 ">
      <div class="text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Vainah Pay — Карта терминалов
        </h2>
        <div class="max-w-5xl mx-auto">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A31b036302ec586e78b9587490d223a9dd33984a6a441003036d443a4e361c62a&source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
            class="w-full h-full min-h-[500px]"
            title="Карта расположения VainahPay"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Connecting of Provider Section -->
    <div id="provider" class="py-20 px-6 bg-gradient-to-r bg-primary-0">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Порядок подключения провайдера
          </h2>
          <section class="max-w-4xl mx-auto text-slate-700 leading-relaxed">
            <p class="indent-8 mt-6">
              Система платёжного сервиса «UniPay» приглашает к сотрудничеству
              ТСЖ, Управляющие Компании, Операторов связи, Интернет-порталы и
              магазины, заинтересованные в приёме наличных платежей от своих
              клиентов.
            </p>

            <p class="indent-8 mt-6">
              Став нашим партнёром, Вы обеспечите своих клиентов удобным и
              доступным платежным сервисом, значительно сократите размер
              дебиторской задолженности (т.к. пользователи услуг будут иметь
              возможность производить оплату товаров/услуг Вашей компании в
              любое удобное время, в наиболее подходящем месте), оптимизируете
              Ваши издержки и увеличите прибыль.
            </p>

            <p class="indent-8 mt-6">
              Поддержка инновационной системы отчетности позволяет настроить
              выгрузку информации в любом удобном для Вас формате и виде. Хотите
              подключить собственный биллинг к нам? Не проблема. От Вас
              потребуется минимум для адаптации Вашего Программного Обеспечения
              для работы с нами. Модульные шлюзы Системы адаптированы более чем
              с 300 провайдерами по разным видам протоколов обмена и современным
              системам шифрования данных.
            </p>

            <p class="indent-8 mt-6">
              Максимальная автоматизация системы позволяет добавлять нового
              поставщика менее чем за 2–3 дня с момента подписания договора.
            </p>
          </section>
        </div>
      </div>
    </div>

    <!-- Connecting of Agent Section -->
    <div id="agent" class="py-20 px-6 ">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Порядок подключения Агента
          </h2>
          <section class="max-w-4xl mx-auto text-slate-700 leading-relaxed">
            <p class="indent-8 mt-6">
              Система платежного сервиса «Vainah Pay» предлагает Вам
              организовать данный бизнес с использованием платёжных терминалов
              «Vainah Pay». Ваш доход будет состоять из вознаграждения, которое
              выплачивает Система «Vainah Pay» владельцам платежных терминалов,
              и дополнительной комиссии, взимаемой с клиента. Программное
              обеспечение Системы платежного сервиса «Vainah Pay» позволяет
              принимать платежи в пользу более чем 3500 поставщиков услуг,
              включая сотовую и IP связь, кабельное телевидение и Интернет,
              электронные деньги, погашение кредитов, услуги туроператоров,
              штрафы, госпошлины, платежи в муниципальный бюджет, широкий спектр
              интернет-магазинов, а также коммунальные услуги и мн. др.
            </p>

            <p class="indent-8 mt-6">
              Скорость обслуживания одного клиента с использованием программного
              обеспечения Системы «Vainah Pay» составляет от 2 до 40 секунд. При
              помощи программного обеспечения Системы «Vainah Pay» Вы получаете
              полный контроль над Вашими финансовыми потоками и возможность в
              режиме реального времени управлять своим бизнесом.
            </p>

            <p class="indent-8 mt-6">
              Поддержка инновационной системы отчетности позволяет настроить
              выгрузку информации в любом удобном для Вас формате и виде. Хотите
              подключить собственный биллинг к нам? Не проблема. От Вас
              потребуется минимум для адаптации Вашего Программного Обеспечения
              для работы с нами. Модульные шлюзы Системы адаптированы более чем
              с 300 провайдерами по разным видам протоколов обмена и современным
              системам шифрования данных.
            </p>

            <p class="indent-8 mt-6">
              Чтобы стать агентом Системы платежного сервиса «Vainah Pay» Вам
              необходимо:
            </p>
            <ul>
              <li>Ознакомиться с Правилами Системы «Vainah Pay».</li>
              <li>
                Оставить заявку на подключение и подготовить пакет документов,
                необходимых для заключения договора.
              </li>
            </ul>
            <div class="pt-6 ">
              <a
                href="assets/pdf/RealRules.pdf"
                target="_blank"
                class="flex items-center justify-center gap-4 p-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
              >
                <!-- PDF Icon -->
                <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

                <!-- Text -->
                <div>
                  <div class="text-primary-600 font-semibold hover:underline">
                    Настоящие Правила разработаны обществом с ограниченной
                    ответственностью
                  </div>
                  <div class="text-sm text-slate-500">Размер: 11 576 Кб</div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Docs Section -->
    <section class="py-20 px-6 bg-gradient-to-r bg-primary-0">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Документы
          </h2>
        </div>

        <!-- Docs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Doc 1 -->
          <a
            href="assets/pdf/DocsForAgreement.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Документы для заключения договора
              </div>
              <div class="text-sm text-slate-500">Размер: 927 Кб</div>
            </div>
          </a>

          <!-- Doc 2 -->
          <a
            href="assets/pdf/ComOffers.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Коммерческое предложение для Провайдеров
              </div>
              <div class="text-sm text-slate-500">Размер: 1020 Кб</div>
            </div>
          </a>

          <!-- Doc 3 -->
          <a
            href="assets/pdf/Rights.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Права и обязанности Провайдера
              </div>
              <div class="text-sm text-slate-500">Размер: 227 Кб</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Docs For Dealers -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Дилерам
          </h2>
        </div>

        <!-- Docs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Doc 1 -->
          <a
            href="assets/pdf/DocDealer1.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора о приеме платежей с субагентом с участием
                коммерческого представителя (Приложение №1.1 к Правилам системы.
                Форма договора о приеме платежей с субагентом с участием
                коммерческого представителя)
              </div>
              <div class="text-sm text-slate-500">Размер: 660 Кб</div>
            </div>
          </a>

          <!-- Doc 2 -->
          <a
            href="assets/pdf/DocDealer2.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора между Коммерческим представителем и Оператором
                Системы.(Приложение №1.6 к Правилам системы. Форма договора
                между Коммерческим представителем и Оператором Системы)
              </div>
              <div class="text-sm text-slate-500">Размер: 556 Кб</div>
            </div>
          </a>

          <!-- Doc 3 -->
          <a
            href="assets/pdf/DocDealer3.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора между Оператором по приему Платежей, Коммерческим
                представителем и Ритейлером.(Приложение №1.3 к Правилам системы.
                Форма договора между Оператором по приему Платежей, Коммерческим
                представителем и Ритейлер)
              </div>
              <div class="text-sm text-slate-500">Размер: 714 Кб</div>
            </div>
          </a>

          <!-- Doc 4 -->
          <a
            href="assets/pdf/DocDealer4.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора между Оператором Системы, Поставщиком
                (Организацией) и Коммерческим представителем.(Приложение №1.5 к
                Правилам системы)
              </div>
              <div class="text-sm text-slate-500">Размер: 558 Кб</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Docs For Agents -->
    <section class="py-20 px-6 bg-gradient-to-r bg-primary-0">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Агентам
          </h2>
        </div>

        <!-- Docs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Doc 1 -->
          <a
            href="assets/pdf/agreement.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Согласие на обработку персональных данных
              </div>
              <div class="text-sm text-slate-500">Размер: 178 Кб</div>
            </div>
          </a>

          <!-- Doc 2 -->
          <a
            href="assets/doc/agentRequest.doc"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- DOC Icon -->
            <img src="assets/img/imgDOC.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Заявление от Агента на отключение Единой Тех.поддержки
              </div>
              <div class="text-sm text-slate-500">Размер: 27 Кб</div>
            </div>
          </a>

          <!-- Doc 3 -->
          <a
            href="assets/pdf/UNIPAY.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Правила Системы UNIPAY
              </div>
              <div class="text-sm text-slate-500">Размер: 11 576 Кб</div>
            </div>
          </a>

          <!-- Doc 4 -->
          <a
            href="assets/pdf/member.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Анкета Участника Системы
              </div>
              <div class="text-sm text-slate-500">Размер: 1 422 Кб</div>
            </div>
          </a>

          <!-- Doc 5 -->
          <a
            href="assets/pdf/rightsAgent.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Права и обязанности Агента
              </div>
              <div class="text-sm text-slate-500">Размер: 3 013 Кб</div>
            </div>
          </a>

          <!-- Doc 6 -->
          <a
            href="assets/pdf/payments.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора о приеме платежей с субагентом.(Приложение №1 к
                Правилам системы. Форма договора о приеме платежей с субагентом)
              </div>
              <div class="text-sm text-slate-500">Размер: 462 Кб</div>
            </div>
          </a>

          <!-- Doc 7 -->
          <a
            href="assets/pdf/reportAgent.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма отчета Агента (Приложение №2 к Правилам системы. Форма
                отчета Агента)
              </div>
              <div class="text-sm text-slate-500">Размер: 352 Кб</div>
            </div>
          </a>

          <!-- Doc 8 -->
          <a
            href="assets/pdf/errPay.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Регламент взаимодействия Сторон в случае ошибочных
                платежей.(Приложение №4 к Правилам системы. Регламент
                взаимодействия Сторон в случае ошибочных платежей)
              </div>
              <div class="text-sm text-slate-500">Размер: 269 Кб</div>
            </div>
          </a>

          <!-- Doc 9 -->
          <a
            href="assets/pdf/comCredit.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Документы при заключении Договора на коммерческий кредит
              </div>
              <div class="text-sm text-slate-500">Размер: 599 Кб</div>
            </div>
          </a>

          <!-- Doc 10 -->
          <a
            href="assets/pdf/constComCredit.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Заявление на постоянный коммерческий кредит
              </div>
              <div class="text-sm text-slate-500">Размер: 328 Кб</div>
            </div>
          </a>

          <!-- Doc 11 -->
          <a
            href="assets/pdf/shrotComCredit.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Заявление на краткосрочный коммерческий кредит
              </div>
              <div class="text-sm text-slate-500">Размер: 326 Кб</div>
            </div>
          </a>

          <!-- Doc 12 -->
          <a
            href="assets/pdf/infoTech.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма договора об информационно-технологическом взаимодействии
                между участниками расчетов, заключаемого Кредитной организацией
                и Оператором Системы. (Приложение №1.2 к Правилам системы)
              </div>
              <div class="text-sm text-slate-500">Размер: 1 018 Кб</div>
            </div>
          </a>

          <!-- Doc 13 -->
          <a
            href="assets/pdf/operatorProvider.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Приложение № 1.4 Форма договора между Оператором Системы и
                Поставщиком (Организацией)
              </div>
              <div class="text-sm text-slate-500">Размер: 1 386 Кб</div>
            </div>
          </a>

          <!-- Doc 14 -->
          <a
            href="assets/pdf/pubInfoTech.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Публичная оферта на заключение Договора об оказании
                информационно-технологических_услуг (Приложение_№ 3)
              </div>
              <div class="text-sm text-slate-500">Размер: 977 Кб</div>
            </div>
          </a>

          <!-- Doc 15 -->
          <a
            href="assets/pdf/payConf.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Форма документа подтверждающего Платеж или совершение банковской
                операции и принятие Заявки к исполнению.(Приложение_№ 5)
              </div>
              <div class="text-sm text-slate-500">Размер: 1 494 Кб</div>
            </div>
          </a>

          <!-- Doc 16 -->
          <a
            href="assets/pdf/privacy.pdf"
            target="_blank"
            class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-primary-100 transition"
          >
            <!-- PDF Icon -->
            <img src="assets/img/imgPDF.png" alt="PDF" class="w-10 h-10" />

            <!-- Text -->
            <div>
              <div class="text-primary-600 font-semibold hover:underline">
                Политика конфиденциальности
              </div>
              <div class="text-sm text-slate-500">Размер: 473 Кб</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Attendanceomponent {}
