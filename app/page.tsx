"use client";

import { useMemo, useState } from "react";

export default function RefundCaseCheckLanding() {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const copy = useMemo(
    () => ({
      en: {
        navServices: "Services",
        navHow: "How it works",
        navFaq: "FAQ",
        navContact: "Contact",
        badge: "English / Russian intake available",
        heroTitle:
          "Recover funds from broker or crypto scams with expert case review.",
        heroText:
          "We help individuals affected by broker fraud, crypto scams, and unauthorized transactions. Submit your case for a structured review and receive a reply within 24 hours.",
        primaryCta: "Start recovery",
        secondaryCta: "How it works",
        stat1Title: "Fast response",
        stat1Text: "Reply within 24 hours",
        stat2Title: "Bilingual support",
        stat2Text: "English and Russian",
        stat3Title: "Confidential",
        stat3Text: "Protected case details",
        formEyebrow: "Case submission",
        formTitle: "Start your review",
        formText:
          "Submit your case details and our team will review your situation and contact you within 24 hours. All information is handled confidentially.",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        preferredLanguage: "Preferred language",
        paymentMethod: "Payment method",
        amountLost: "Estimated loss amount",
        platform: "Platform / broker / wallet name",
        caseLabel: "Describe what happened",
        placeholderFirst: "John",
        placeholderLast: "Carter",
        placeholderEmail: "name@example.com",
        placeholderPhone: "+1 555 123 4567",
        placeholderAmount: "USD / EUR amount",
        placeholderPlatform: "Company or platform name",
        placeholderCase:
          "Describe what happened, dates, payment method, communication, and any details that may help the review.",
        paymentCard: "Bank card",
        paymentWire: "Wire transfer",
        paymentCrypto: "Crypto transfer",
        paymentOther: "Other",
        disclaimer:
          "I understand that submission of the form does not guarantee case acceptance or recovery outcome.",
        submit: "Submit for review",
        submitting: "Submitting...",
        success: "Your case has been submitted successfully.",
        error: "Something went wrong. Please try again.",
        servicesTitle1: "Broker dispute review",
        servicesText1:
          "Initial assessment of payments made to brokers, trading platforms, or related intermediaries.",
        servicesTitle2: "Crypto scam intake",
        servicesText2:
          "Structured case submission for wallet theft, fake exchanges, fake investment platforms, and similar incidents.",
        servicesTitle3: "Recovery guidance",
        servicesText3:
          "Professional review of possible next steps based on payment route, timing, and available evidence.",
        howEyebrow: "How it works",
        howTitle: "A clear 3-step process",
        step1Title: "Submit your case",
        step1Text:
          "Provide the basic details of your situation, including the platform, payment method, amount, and timeline.",
        step2Title: "Case review",
        step2Text:
          "Our team reviews the information and assesses whether your case may qualify for further recovery action.",
        step3Title: "Next-step guidance",
        step3Text:
          "If your case looks viable, we contact you with the available options and the recommended next steps.",
        supportEyebrow: "Professional support",
        supportTitle: "Built for fast case intake",
        supportText:
          "Submit your case through a structured form and receive a review from our team. Designed for speed, clarity, and confidential communication.",
        supportCardTitle: "What to prepare before submission:",
        support1: "Broker / platform name",
        support2: "Payment details and approximate amount",
        support3: "Timeline, screenshots, and communication history",
        faqEyebrow: "FAQ",
        faqTitle: "Common questions",
        faq1q: "What cases do you review?",
        faq1a:
          "We review cases related to broker disputes, crypto scams, unauthorized transactions, and similar payment recovery matters.",
        faq2q: "How quickly will I receive a response?",
        faq2a: "We aim to review new submissions and reply within 24 hours.",
        faq3q: "Do you guarantee a refund?",
        faq3a:
          "No. Every case depends on timing, payment route, available evidence, and the parties involved.",
        faq4q: "Is my information confidential?",
        faq4a:
          "Yes. Information submitted through the form is treated as confidential and used only for case review purposes.",
        footerLeft: "© 2026 RefundCase Check. All rights reserved.",
        footerRight:
          "For informational purposes only. No outcome is guaranteed.",
      },
      ru: {
        navServices: "Услуги",
        navHow: "Как это работает",
        navFaq: "FAQ",
        navContact: "Контакты",
        badge: "Доступна английская / русская форма",
        heroTitle:
          "Возврат средств после брокерских и крипто-схем с профессиональной проверкой кейса.",
        heroText:
          "Мы помогаем людям, столкнувшимся с мошенническими брокерами, крипто-скамами и несанкционированными транзакциями. Отправьте кейс на структурированную проверку и получите ответ в течение 24 часов.",
        primaryCta: "Начать проверку",
        secondaryCta: "Как это работает",
        stat1Title: "Быстрый ответ",
        stat1Text: "Ответ в течение 24 часов",
        stat2Title: "Два языка",
        stat2Text: "Английский и русский",
        stat3Title: "Конфиденциально",
        stat3Text: "Данные защищены",
        formEyebrow: "Отправка кейса",
        formTitle: "Начните проверку",
        formText:
          "Оставьте данные по вашему кейсу, и наша команда проведёт анализ ситуации и свяжется с вами в течение 24 часов. Вся информация обрабатывается конфиденциально.",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        phone: "Телефон",
        preferredLanguage: "Предпочтительный язык",
        paymentMethod: "Способ оплаты",
        amountLost: "Предполагаемая сумма потери",
        platform: "Название платформы / брокера / кошелька",
        caseLabel: "Опишите ситуацию",
        placeholderFirst: "Иван",
        placeholderLast: "Петров",
        placeholderEmail: "name@example.com",
        placeholderPhone: "+7 999 123 45 67",
        placeholderAmount: "Сумма в USD / EUR",
        placeholderPlatform: "Название компании или платформы",
        placeholderCase:
          "Опишите, что произошло, даты, способ оплаты, коммуникацию и любые детали, которые помогут в проверке.",
        paymentCard: "Банковская карта",
        paymentWire: "Банковский перевод",
        paymentCrypto: "Криптоперевод",
        paymentOther: "Другое",
        disclaimer:
          "Я понимаю, что отправка формы не гарантирует принятие кейса или возврат средств.",
        submit: "Отправить на проверку",
        submitting: "Отправка...",
        success: "Ваш кейс успешно отправлен.",
        error: "Что-то пошло не так. Попробуйте ещё раз.",
        servicesTitle1: "Проверка споров с брокерами",
        servicesText1:
          "Первичный анализ платежей, отправленных брокерам, торговым платформам или связанным посредникам.",
        servicesTitle2: "Проверка крипто-скама",
        servicesText2:
          "Структурированная подача кейса по кражам с кошельков, фейковым биржам, инвестиционным платформам и схожим ситуациям.",
        servicesTitle3: "Рекомендации по recovery",
        servicesText3:
          "Профессиональная оценка возможных следующих шагов с учётом способа оплаты, сроков и доступных доказательств.",
        howEyebrow: "Как это работает",
        howTitle: "Понятный процесс в 3 шага",
        step1Title: "Отправка кейса",
        step1Text:
          "Укажите основные детали ситуации: платформу, способ оплаты, сумму и временную линию.",
        step2Title: "Проверка кейса",
        step2Text:
          "Наша команда изучает информацию и оценивает, подходит ли кейс для дальнейшей recovery-работы.",
        step3Title: "Следующие шаги",
        step3Text:
          "Если кейс выглядит перспективным, мы связываемся с вами и объясняем возможные дальнейшие действия.",
        supportEyebrow: "Профессиональная поддержка",
        supportTitle: "Сделано для быстрого intake",
        supportText:
          "Отправьте кейс через структурированную форму и получите проверку от нашей команды. Всё построено на скорости, понятности и конфиденциальной коммуникации.",
        supportCardTitle: "Что подготовить перед отправкой:",
        support1: "Название брокера / платформы",
        support2: "Детали платежа и примерная сумма",
        support3: "Хронология, скриншоты и история переписки",
        faqEyebrow: "FAQ",
        faqTitle: "Частые вопросы",
        faq1q: "Какие кейсы вы рассматриваете?",
        faq1a:
          "Мы рассматриваем кейсы, связанные со спорами с брокерами, крипто-скамами, несанкционированными транзакциями и схожими вопросами возврата средств.",
        faq2q: "Как быстро я получу ответ?",
        faq2a: "Обычно мы отвечаем на новые заявки в течение 24 часов.",
        faq3q: "Вы гарантируете возврат средств?",
        faq3a:
          "Нет. Каждый кейс зависит от сроков, способа оплаты, доступных доказательств и вовлечённых сторон.",
        faq4q: "Моя информация конфиденциальна?",
        faq4a:
          "Да. Данные, отправленные через форму, рассматриваются как конфиденциальные и используются только для проверки кейса.",
        footerLeft: "© 2026 RefundCase Check. Все права защищены.",
        footerRight:
          "Материалы сайта носят информационный характер. Результат не гарантируется.",
      },
    }),
    []
  );

  const t = copy[lang];

  const steps = [
    { title: t.step1Title, text: t.step1Text },
    { title: t.step2Title, text: t.step2Text },
    { title: t.step3Title, text: t.step3Text },
  ];

  const faqs = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const language = String(data.get("language") || "");
    const paymentMethod = String(data.get("paymentMethod") || "");
    const amount = String(data.get("amount") || "");
    const platform = String(data.get("platform") || "");
    const caseDescription = String(data.get("caseDescription") || "");

    const message =
      `🆕 New Recovery Lead\n\n` +
      `👤 Name: ${firstName} ${lastName}\n` +
      `📧 Email: ${email}\n` +
      `📱 Phone: ${phone}\n` +
      `🌍 Language: ${language}\n` +
      `💳 Payment Method: ${paymentMethod}\n` +
      `💰 Estimated Loss: ${amount}\n` +
      `🏦 Platform: ${platform}\n` +
      `📝 Case Details: ${caseDescription}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "YOUR_CHAT_ID",
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Telegram request failed");
      }

      setStatusMessage(t.success);
      form.reset();
    } catch {
      setStatusMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              RefundCase Check
            </div>
            <div className="text-xs text-white/50">
              Case review for payment recovery matters
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 text-sm text-white/70 md:flex">
              <a href="#services" className="transition hover:text-white">
                {t.navServices}
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                {t.navHow}
              </a>
              <a href="#faq" className="transition hover:text-white">
                {t.navFaq}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {t.navContact}
              </a>
            </nav>

            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "en"
                    ? "bg-emerald-400 text-neutral-950"
                    : "text-white/65 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "ru"
                    ? "bg-emerald-400 text-neutral-950"
                    : "text-white/65 hover:text-white"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_26%)]" />
          <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-24">
            <div className="max-w-2xl pt-2 md:pt-8">
              <div className="mb-5 inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.10)]">
                {t.badge}
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-[22px] md:leading-9">
                {t.heroText}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3.5 text-base font-medium text-neutral-950 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  {t.primaryCta}
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/15 bg-white/0 px-6 py-3.5 text-base font-medium text-white/85 transition hover:-translate-y-0.5 hover:bg-white/5"
                >
                  {t.secondaryCta}
                </a>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="text-2xl font-semibold">{t.stat1Title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    {t.stat1Text}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="text-2xl font-semibold">{t.stat2Title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    {t.stat2Text}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="text-2xl font-semibold">{t.stat3Title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    {t.stat3Text}
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact"
              className="relative rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-9"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent" />
              <div className="relative mb-6">
                <div className="text-sm text-emerald-300">{t.formEyebrow}</div>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  {t.formTitle}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                  {t.formText}
                </p>
              </div>

              <form className="relative space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.firstName}
                    </span>
                    <input
                      name="firstName"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderFirst}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.lastName}
                    </span>
                    <input
                      name="lastName"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderLast}
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.email}
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderEmail}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.phone}
                    </span>
                    <input
                      name="phone"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderPhone}
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.preferredLanguage}
                    </span>
                    <select
                      name="language"
                      defaultValue={lang === "en" ? "English" : "Русский"}
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition focus:border-emerald-400/40 focus:bg-neutral-900"
                    >
                      <option>English</option>
                      <option>Русский</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.paymentMethod}
                    </span>
                    <select
                      name="paymentMethod"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition focus:border-emerald-400/40 focus:bg-neutral-900"
                    >
                      <option>{t.paymentCard}</option>
                      <option>{t.paymentWire}</option>
                      <option>{t.paymentCrypto}</option>
                      <option>{t.paymentOther}</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.amountLost}
                    </span>
                    <input
                      name="amount"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderAmount}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      {t.platform}
                    </span>
                    <input
                      name="platform"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                      placeholder={t.placeholderPlatform}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">
                    {t.caseLabel}
                  </span>
                  <textarea
                    name="caseDescription"
                    rows={5}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3.5 outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-neutral-900"
                    placeholder={t.placeholderCase}
                  />
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60">
                  <input type="checkbox" required className="mt-1" />
                  <span>{t.disclaimer}</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? t.submitting : t.submit}
                </button>

                {statusMessage ? (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/75">
                    {statusMessage}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-6 md:py-12"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [t.servicesTitle1, t.servicesText1],
              [t.servicesTitle2, t.servicesText2],
              [t.servicesTitle3, t.servicesText3],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">{t.howEyebrow}</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.howTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm text-white/70">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm text-emerald-300">
                  {t.supportEyebrow}
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  {t.supportTitle}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                  {t.supportText}
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-neutral-950/60 p-6 text-sm text-white/65">
                <div>{t.supportCardTitle}</div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    {t.support1}
                  </div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    {t.support2}
                  </div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    {t.support3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">{t.faqEyebrow}</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.faqTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>{t.footerLeft}</div>
          <div>{t.footerRight}</div>
        </div>
      </footer>
    </div>
  );
}
