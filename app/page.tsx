"use client";

import { useState } from "react";

export default function RefundCaseCheckLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const steps = [
    {
      title: "Submit your case",
      text: "Provide the basic details of your situation, including the platform, payment method, amount, and timeline.",
    },
    {
      title: "Case review",
      text: "Our team reviews the information and assesses whether your case may qualify for further recovery action.",
    },
    {
      title: "Next-step guidance",
      text: "If your case looks viable, we contact you with the available options and the recommended next steps.",
    },
  ];

  const faqs = [
    {
      q: "What cases do you review?",
      a: "We review cases related to broker disputes, crypto scams, unauthorized transactions, and similar payment recovery matters.",
    },
    {
      q: "How quickly will I receive a response?",
      a: "We aim to review new submissions and reply within 24 hours.",
    },
    {
      q: "Do you guarantee a refund?",
      a: "No. Every case depends on timing, payment route, available evidence, and the parties involved.",
    },
    {
      q: "Is my information confidential?",
      a: "Yes. Information submitted through the form is treated as confidential and used only for case review purposes.",
    },
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

      setStatusMessage("Your case has been submitted successfully.");
      form.reset();
    } catch (error) {
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
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

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How it works
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                English / Русский intake available
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Recover funds from broker or crypto scams with expert case review
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                We help individuals recover funds lost to fraudulent brokers,
                crypto scams, and unauthorized transactions. Submit your case
                and receive a professional assessment within 24 hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:opacity-90"
                >
                  Start recovery
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
                >
                  How it works
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-sm sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">Fast response</div>
                  <div className="mt-1 text-white/60">
                    We reply within 24 hours
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">
                    Multi-language support
                  </div>
                  <div className="mt-1 text-white/60">
                    English & Russian available
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold">Confidential</div>
                  <div className="mt-1 text-white/60">
                    Your data is protected
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact"
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 md:p-8"
            >
              <div className="mb-6">
                <div className="text-sm text-emerald-300">Case submission</div>
                <h2 className="mt-2 text-2xl font-semibold">
                  Start your review
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Submit your case details and our team will review your
                  situation and contact you within 24 hours. All information is
                  handled strictly confidential.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      First name
                    </span>
                    <input
                      name="firstName"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="John"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Last name
                    </span>
                    <input
                      name="lastName"
                      required
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
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="name@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Phone
                    </span>
                    <input
                      name="phone"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="+1 555 123 4567"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Preferred language
                    </span>
                    <select
                      name="language"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none"
                    >
                      <option>English</option>
                      <option>Русский</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Payment method
                    </span>
                    <select
                      name="paymentMethod"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none"
                    >
                      <option>Bank card</option>
                      <option>Wire transfer</option>
                      <option>Crypto transfer</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Estimated loss amount
                    </span>
                    <input
                      name="amount"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="USD / EUR amount"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Platform / broker / wallet name
                    </span>
                    <input
                      name="platform"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                      placeholder="Company or platform name"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">
                    Describe what happened
                  </span>
                  <textarea
                    name="caseDescription"
                    rows={5}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/25"
                    placeholder="Describe what happened, dates, payment method, communication, and any details that may help the review."
                  />
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    I understand that submission of the form does not guarantee
                    case acceptance or recovery outcome.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit for review"}
                </button>

                {statusMessage ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    {statusMessage}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-6 md:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "Broker dispute review",
                "Initial assessment of payments made to brokers, trading platforms, or related intermediaries.",
              ],
              [
                "Crypto scam intake",
                "Structured case submission for wallet theft, fake exchanges, fake investment platforms, and similar incidents.",
              ],
              [
                "Recovery guidance",
                "Professional review of possible next steps based on payment route, timing, and available evidence.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">How it works</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              A clear 3-step process
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
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm text-emerald-300">Professional support</div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Built for fast case intake
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                  Submit your case through a structured form and receive a review
                  from our team. Designed for speed, clarity, and confidential
                  communication.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-neutral-950/60 p-6 text-sm text-white/65">
                <div>What to prepare before submission:</div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    Broker / platform name
                  </div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    Payment details and approximate amount
                  </div>
                  <div className="rounded-2xl border border-white/10 px-4 py-3">
                    Timeline, screenshots, and communication history
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm text-emerald-300">FAQ</div>
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
