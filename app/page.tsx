"use client"; 

import { useMemo, useState } from "react";

type Lang = "en" | "ru";

export default function RefundCaseCheckLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const copy = useMemo(
    () => ({
      en: {
        navServices: "Services",
        navHow: "Process",
        navFaq: "FAQ",
        navContact: "Request review",
        brandSub: "Private case assessment for recovery matters",
        badge: "Confidential case review · EN / RU support",
        heroTitle: "A private review of your broker or crypto recovery case.",
        heroText:
          "RefundCase Check helps clients organize their evidence, understand possible recovery routes, and receive a clear first assessment from a structured review team.",
        primaryCta: "Request case review",
        secondaryCta: "See how it works",
        stat1: "1,280+",
        stat1Text: "case requests reviewed",
        stat2: "24h",
        stat2Text: "average first response",
        stat3: "EN / RU",
        stat3Text: "client communication",
        stat4: "Private",
        stat4Text: "secure intake process",

        formEyebrow: "Private request",
        formTitle: "Submit your case for review",
        formText:
          "Tell us what happened. We will review the details and contact you with the next possible steps.",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        preferredLanguage: "Preferred language",
        paymentMethod: "Payment method",
        amountLost: "Estimated amount",
        platform: "Company / platform / wallet",
        caseLabel: "What happened?",
        placeholderFirst: "John",
        placeholderLast: "Carter",
        placeholderEmail: "name@example.com",
        placeholderPhone: "+1 555 123 4567",
        placeholderAmount: "USD / EUR amount",
        placeholderPlatform: "Broker, exchange, wallet or company",
        placeholderCase:
          "Describe the timeline, payment method, communication, screenshots, documents, and any important details.",
        paymentCard: "Bank card",
        paymentWire: "Bank transfer",
        paymentCrypto: "Crypto transfer",
        paymentOther: "Other",
        disclaimer:
          "I understand this is an initial review request and that no recovery outcome is guaranteed.",
        submit: "Send request",
        submitting: "Sending...",
        success: "Your request has been received. We will contact you shortly.",
        error: "Request saved locally. Connect a form endpoint to receive leads.",

        servicesTitle: "What we review",
        servicesText:
          "We focus on structured, document-based assessment of recovery-related cases.",
        services: [
          [
            "Broker dispute assessment",
            "Review of payments, communication, platform behavior, and available documents.",
          ],
          [
            "Crypto scam case review",
            "Initial assessment for fake exchanges, wallet theft, investment platforms, and crypto transfers.",
          ],
          [
            "Evidence organization",
            "Help understanding which documents, screenshots, payment records, and timelines matter.",
          ],
        ],

        howEyebrow: "Process",
        howTitle: "Clear steps. No confusion.",
        steps: [
          [
            "Submit the request",
            "Fill in the form with the platform name, payment method, amount, timeline, and contact details.",
          ],
          [
            "Case assessment",
            "We review the information and identify whether the case has enough detail for further action.",
          ],
          [
            "Next-step guidance",
            "You receive a clear reply explaining possible options, limitations, and recommended next steps.",
          ],
        ],

        trustEyebrow: "Why clients use us",
        trustTitle: "Built for sensitive recovery cases",
        trustText:
          "The page is designed for people who need calm, private, and structured communication after a stressful financial incident.",
        trustItems: [
          "Confidential intake",
          "Human review",
          "Clear communication",
          "No unrealistic promises",
        ],

        faqEyebrow: "FAQ",
        faqTitle: "Questions before submitting",
        faqs: [
          [
            "Do you guarantee a refund?",
            "No. Recovery depends on the payment route, timing, evidence, platform, and other parties involved.",
          ],
          [
            "What information should I prepare?",
            "Payment proof, screenshots, messages, platform name, wallet addresses, bank details, and a clear timeline.",
          ],
          [
            "How fast will I get a reply?",
            "Most new requests receive a first reply within 24 hours.",
          ],
          [
            "Is my information private?",
            "Yes. The information is used only to review your request and understand the situation.",
          ],
        ],

        footerLeft: "© 2026 RefundCase Check. All rights reserved.",
        footerRight: "Informational review only. No result is guaranteed.",
      },

      ru: {
        navServices: "Услуги",
        navHow: "Процесс",
        navFaq: "FAQ",
        navContact: "Оставить заявку",
        brandSub: "Конфиденциальная проверка recovery-кейсов",
        badge: "Конфиденциальная проверка · поддержка EN / RU",
        heroTitle:
          "Приватная проверка вашего кейса по брокеру или крипто-потере.",
        heroText:
          "RefundCase Check помогает клиентам собрать информацию, структурировать доказательства, понять возможные варианты действий и получить первичную оценку ситуации.",
        primaryCta: "Оставить заявку",
        secondaryCta: "Как это работает",
        stat1: "1 280+",
        stat1Text: "заявок рассмотрено",
        stat2: "24 ч",
        stat2Text: "среднее время ответа",
        stat3: "EN / RU",
        stat3Text: "коммуникация с клиентом",
        stat4: "Private",
        stat4Text: "конфиденциальный процесс",

        formEyebrow: "Приватная заявка",
        formTitle: "Отправьте кейс на проверку",
        formText:
          "Опишите, что произошло. Мы изучим детали и свяжемся с вами по возможным дальнейшим шагам.",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        phone: "Телефон",
        preferredLanguage: "Предпочтительный язык",
        paymentMethod: "Способ оплаты",
        amountLost: "Примерная сумма",
        platform: "Компания / платформа / кошелёк",
        caseLabel: "Что произошло?",
        placeholderFirst: "Иван",
        placeholderLast: "Петров",
        placeholderEmail: "name@example.com",
        placeholderPhone: "+380 00 000 00 00",
        placeholderAmount: "Сумма в USD / EUR",
        placeholderPlatform: "Брокер, биржа, кошелёк или компания",
        placeholderCase:
          "Опишите хронологию, способ оплаты, переписку, документы, скриншоты и важные детали.",
        paymentCard: "Банковская карта",
        paymentWire: "Банковский перевод",
        paymentCrypto: "Криптоперевод",
        paymentOther: "Другое",
        disclaimer:
          "Я понимаю, что это первичная проверка обращения и результат возврата средств не гарантируется.",
        submit: "Отправить заявку",
        submitting: "Отправка...",
        success: "Заявка получена. Мы свяжемся с вами в ближайшее время.",
        error: "Заявка сохранена локально. Подключите endpoint формы для получения лидов.",

        servicesTitle: "Что мы проверяем",
        servicesText:
          "Мы работаем со структурированной оценкой кейсов, связанных с возможным возвратом средств.",
        services: [
          [
            "Споры с брокерами",
            "Проверка платежей, переписки, поведения платформы и доступных документов.",
          ],
          [
            "Крипто-скам",
            "Первичная оценка ситуаций с фейковыми биржами, кражей с кошельков и криптопереводами.",
          ],
          [
            "Сбор доказательств",
            "Помогаем понять, какие скриншоты, платежи, документы и хронология имеют значение.",
          ],
        ],

        howEyebrow: "Процесс",
        howTitle: "Понятно, спокойно, по шагам.",
        steps: [
          [
            "Отправьте заявку",
            "Укажите платформу, способ оплаты, сумму, сроки и контактные данные.",
          ],
          [
            "Проверка кейса",
            "Мы изучаем информацию и оцениваем, достаточно ли данных для дальнейшей работы.",
          ],
          [
            "Рекомендации",
            "Вы получаете понятный ответ с возможными вариантами, ограничениями и следующими шагами.",
          ],
        ],

        trustEyebrow: "Почему нам доверяют",
        trustTitle: "Для чувствительных financial recovery кейсов",
        trustText:
          "Сайт сделан для людей, которым нужна спокойная, приватная и понятная коммуникация после сложной финансовой ситуации.",
        trustItems: [
          "Конфиденциальная заявка",
          "Проверка человеком",
          "Понятная коммуникация",
          "Без нереалистичных обещаний",
        ],

        faqEyebrow: "FAQ",
        faqTitle: "Вопросы перед отправкой",
        faqs: [
          [
            "Вы гарантируете возврат средств?",
            "Нет. Возможность возврата зависит от способа оплаты, сроков, доказательств, платформы и других сторон.",
          ],
          [
            "Что подготовить заранее?",
            "Подтверждения платежей, скриншоты, переписку, название платформы, адреса кошельков и хронологию.",
          ],
          [
            "Как быстро я получу ответ?",
            "Обычно первичный ответ по новой заявке приходит в течение 24 часов.",
          ],
          [
            "Информация конфиденциальна?",
            "Да. Данные используются только для проверки обращения и понимания ситуации.",
          ],
        ],

        footerLeft: "© 2026 RefundCase Check. Все права защищены.",
        footerRight:
          "Информационная проверка. Результат возврата не гарантируется.",
      },
    }),
    []
  );

  const t = copy[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage(t.success);
      e.currentTarget.reset();
    }, 900);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070A08] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A08]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              RefundCase Check
            </div>
            <div className="text-xs text-white/45">{t.brandSub}</div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
              <a href="#services" className="transition hover:text-white">
                {t.navServices}
              </a>
              <a href="#how" className="transition hover:text-white">
                {t.navHow}
              </a>
              <a href="#faq" className="transition hover:text-white">
                {t.navFaq}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {t.navContact}
              </a>
            </nav>

            <div className="relative flex h-10 w-[106px] rounded-full border border-white/10 bg-white/[0.06] p-1">
              <div
                className={`absolute top-1 h-8 w-12 rounded-full bg-emerald-300 transition-all duration-300 ${
                  lang === "ru" ? "left-[54px]" : "left-1"
                }`}
              />
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`relative z-10 w-12 text-xs font-semibold transition ${
                  lang === "en" ? "text-black" : "text-white/55"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`relative z-10 w-12 text-xs font-semibold transition ${
                  lang === "ru" ? "text-black" : "text-white/55"
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(16,185,129,0.24),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.11),transparent_30%)]" />
          <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.03fr_0.97fr] md:items-start md:py-24">
            <div className="animate-[fadeUp_0.7s_ease-out_both]">
              <div className="mb-6 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200 shadow-[0_0_45px_rgba(16,185,129,0.12)]">
                {t.badge}
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66 md:text-[21px] md:leading-9">
                {t.heroText}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.13)]"
                >
                  {t.primaryCta}
                </a>
                <a
                  href="#how"
                  className="rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/85 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  {t.secondaryCta}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  [t.stat1, t.stat1Text],
                  [t.stat2, t.stat2Text],
                  [t.stat3, t.stat3Text],
                  [t.stat4, t.stat4Text],
                ].map(([num, text]) => (
                  <div
                    key={num}
                    className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.07]"
                  >
                    <div className="text-2xl font-semibold tracking-tight">
                      {num}
                    </div>
                    <div className="mt-2 text-sm leading-5 text-white/52">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="contact"
              className="animate-[fadeUp_0.9s_ease-out_both] rounded-[34px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:p-8"
            >
              <div className="mb-6">
                <div className="text-sm font-medium text-emerald-200">
                  {t.formEyebrow}
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  {t.formTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {t.formText}
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="firstName" label={t.firstName} placeholder={t.placeholderFirst} required />
                  <Input name="lastName" label={t.lastName} placeholder={t.placeholderLast} required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="email" type="email" label={t.email} placeholder={t.placeholderEmail} required />
                  <Input name="phone" label={t.phone} placeholder={t.placeholderPhone} required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Select
                    name="language"
                    label={t.preferredLanguage}
                    options={["English", "Русский"]}
                  />
                  <Select
                    name="paymentMethod"
                    label={t.paymentMethod}
                    options={[
                      t.paymentCard,
                      t.paymentWire,
                      t.paymentCrypto,
                      t.paymentOther,
                    ]}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="amount" label={t.amountLost} placeholder={t.placeholderAmount} />
                  <Input name="platform" label={t.platform} placeholder={t.placeholderPlatform} />
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/65">
                    {t.caseLabel}
                  </span>
                  <textarea
                    name="caseDescription"
                    rows={5}
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-white/24 focus:border-emerald-300/45 focus:bg-black/35"
                    placeholder={t.placeholderCase}
                  />
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/55">
                  <input type="checkbox" required className="mt-1 accent-emerald-300" />
                  <span>{t.disclaimer}</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-emerald-300 px-5 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(16,185,129,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? t.submitting : t.submit}
                </button>

                {statusMessage && (
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-4 text-white/58">{t.servicesText}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t.services.map(([title, text], i) => (
              <Card key={title} index={i + 1} title={title} text={text} />
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-5 py-10">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 md:p-10">
            <div className="mb-9 max-w-2xl">
              <div className="text-sm font-medium text-emerald-200">
                {t.howEyebrow}
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                {t.howTitle}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {t.steps.map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-[28px] border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:bg-black/30"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-300 text-sm font-bold text-black">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <div className="text-sm font-medium text-emerald-200">
                {t.trustEyebrow}
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                {t.trustTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/58">
                {t.trustText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[26px] border border-white/10 bg-white/[0.045] p-6 text-lg font-medium transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25"
                >
                  <span className="mr-2 text-emerald-200">●</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm font-medium text-emerald-200">
              {t.faqEyebrow}
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
              {t.faqTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {t.faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]"
              >
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/56">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>{t.footerLeft}</div>
          <div>{t.footerRight}</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-white/24 focus:border-emerald-300/45 focus:bg-black/35"
        placeholder={placeholder}
      />
    </label>
  );
}

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <select
        name={name}
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition focus:border-emerald-300/45 focus:bg-black/35"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function Card({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.07]">
      <div className="mb-6 text-sm text-emerald-200">0{index}</div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}
