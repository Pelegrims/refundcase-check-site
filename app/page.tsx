export default function RefundCaseCheckLanding() {
  const steps = [
    {
      title: "Submit your case",
      text: "Tell us what happened, when it happened, and how the payment was made.",
    },
    {
      title: "Initial confidential review",
      text: "Our team reviews the submitted details and evaluates the available information.",
    },
    {
      title: "Receive next-step guidance",
      text: "If applicable, you may receive additional guidance regarding possible next steps.",
    },
  ];

  const faqs = [
    {
      q: "What cases do you review?",
      a: "Cases involving broker disputes, crypto-related incidents, unauthorized transactions, and online financial platform issues.",
    },
    {
      q: "Do you guarantee fund recovery?",
      a: "No. Outcomes depend on multiple external factors including timing, payment methods, platform activity, and available evidence.",
    },
    {
      q: "What information should I prepare?",
      a: "Payment confirmations, screenshots, wallet addresses, emails, transaction IDs, and communication history may help during the review process.",
    },
    {
      q: "Is my information confidential?",
      a: "Yes. Submitted information is handled confidentially and used solely for review purposes.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              RefundCase Check
            </div>

            <div className="text-xs text-white/50">
              Confidential case assessment platform
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>

            <a href="#how-it-works" className="hover:text-white">
              Process
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Confidential case review · Secure intake
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Professional review of broker disputes and crypto-related cases.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                RefundCase Check helps users organize case details,
                review payment activity, and better understand possible
                next steps related to online investment platforms,
                broker disputes, crypto incidents, and financial
                transaction issues.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:opacity-90"
                >
                  Start confidential review
                </a>

                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
                >
                  How it works
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">24h</div>

                  <div className="mt-1 text-white/60">
                    Initial response target
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">Private</div>

                  <div className="mt-1 text-white/60">
                    Secure intake process
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">Human-reviewed</div>

                  <div className="mt-1 text-white/60">
                    Structured case assessment
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact"
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 md:p-8"
            >
              <div className="mb-6">
                <div className="text-sm text-emerald-300">
                  Secure intake
                </div>

                <h2 className="mt-2 text-2xl font-semibold">
                  Request a confidential review
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Complete this short intake form. Your request will be
                  reviewed confidentially by our team.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      First name
                    </span>

                    <input
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="John"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Last name
                    </span>

                    <input
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="Carter"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Email
                    </span>

                    <input
                      type="email"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="name@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Phone
                    </span>

                    <input
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="+1 555 123 4567"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">
                    Describe your situation
                  </span>

                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                    placeholder="Describe what happened, including platform details, payment methods, dates, communication history, and any relevant information."
                  />
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                  <input type="checkbox" className="mt-1" />

                  <span>
                    I understand that submitting this form does not
                    guarantee any financial outcome or recovery result.
                  </span>
                </label>

                <button
                  type="button"
                  className="w-full rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
                >
                  Submit confidential request
                </button>
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
              [
                "Broker dispute review",
                "Assessment of broker-related complaints, withdrawal issues, and platform communication records.",
              ],

              [
                "Crypto-related cases",
                "Initial review of crypto incidents involving transfers, wallets, exchanges, and investment platforms.",
              ],

              [
                "Evidence organization",
                "Guidance regarding screenshots, payment records, timelines, and supporting documentation.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">
              Process
            </div>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Clear and structured review process
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">
              FAQ
            </div>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">
                  {item.q}
                </h3>

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
          <div>
            © 2026 RefundCase Check. All rights reserved.
          </div>

          <div>
            Confidential review only. No financial outcome is guaranteed.
          </div>
        </div>
      </footer>
    </div>
  );
}
