export default function RefundCaseCheckLanding() {
  const steps = [
    { title: "Submit your case", text: "Tell us what happened, when it happened, and how the payment was made." },
    { title: "Free preliminary review", text: "We review the basic facts and assess whether your case may qualify for further action." },
    { title: "Next-step guidance", text: "If the case looks viable, we explain the available legal and procedural options." },
  ];

  const faqs = [
    { q: "What cases do you review?", a: "Cases involving disputed broker activity, crypto-related fraud, unauthorized transactions, and similar cross-border payment disputes." },
    { q: "Is the first review paid?", a: "The first case submission and preliminary review can be offered free of charge, subject to internal evaluation." },
    { q: "Do you guarantee a refund?", a: "No. Outcomes depend on the facts, payment route, timing, available records, and the institutions involved." },
    { q: "What do I need to submit?", a: "Your contact details, payment method, timeline, platform name, transaction amount, and any supporting documents or screenshots." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">RefundCase Check</div>
            <div className="text-xs text-white/50">Case review for payment recovery matters</div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                English / Русский intake available
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Review your recovery case with a structured legal-first intake.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Modern intake page for users seeking guidance on disputed broker payments, crypto scam losses,
                and related recovery matters. Built to collect structured case details clearly and professionally.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:opacity-90">
                  Submit a case
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5">
                  How it works
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">24h</div>
                  <div className="mt-1 text-white/60">Initial case response target</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">2 languages</div>
                  <div className="mt-1 text-white/60">English and Russian flow</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">Secure</div>
                  <div className="mt-1 text-white/60">Structured form submission</div>
                </div>
              </div>
            </div>

            <div id="contact" className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 md:p-8">
              <div className="mb-6">
                <div className="text-sm text-emerald-300">Case submission</div>
                <h2 className="mt-2 text-2xl font-semibold">Start your review</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  This is the form block we can connect to Tally, Formspree, Brevo, Telegram, or your CRM.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">First name</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="John" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Last name</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="Carter" />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Email</span>
                    <input type="email" className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="name@example.com" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Phone</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="+1 555 123 4567" />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Preferred language</span>
                    <select className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none">
                      <option>English</option>
                      <option>Русский</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Payment method</span>
                    <select className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none">
                      <option>Bank card</option>
                      <option>Wire transfer</option>
                      <option>Crypto transfer</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Amount lost</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="USD / EUR amount" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Platform / broker / wallet</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="Company or platform name" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">Describe your case</span>
                  <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25" placeholder="Describe what happened, dates, contact attempts, and any details that may help the review." />
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                  <input type="checkbox" className="mt-1" />
                  <span>I understand that submission of the form does not guarantee case acceptance or recovery outcome.</span>
                </label>

                <button type="button" className="w-full rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90">
                  Submit for review
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-6 md:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Broker dispute review", "Initial assessment of payments made to brokers or trading platforms."],
              ["Crypto scam case intake", "Structured submission for unauthorized wallet transfers and scam incidents."],
              ["Cross-border guidance", "Support-oriented intake for users dealing with international payment disputes."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">How it works</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">A clear 3-step intake process</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm text-emerald-300">Bilingual layout</div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Ready for EN / RU switching</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                  The next step is replacing the static text with a language switcher and connecting the form to your chosen backend.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-neutral-950/60 p-6 text-sm text-white/65">
                <div>Recommended launch stack:</div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/10 px-4 py-3">Vercel for hosting</div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">Formspree or Tally for fast form delivery</div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">Telegram or email routing for instant lead alerts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">FAQ</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Common questions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© 2026 RefundCase Check. All rights reserved.</div>
          <div>For informational purposes only. No outcome is guaranteed.</div>
        </div>
      </footer>
    </div>
  );
}
