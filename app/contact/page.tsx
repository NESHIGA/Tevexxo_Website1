export const metadata = { title: 'Contact — Tevexxo' };

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10">
          <p className="eyebrow text-orange-400">CONTACT</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Let’s talk about your <span className="text-orange-500">next step.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Questions about a program, a demo, or a partnership? We usually reply within one business day.
          </p>
        </div>
      </header>
      <section className="container -mt-8 grid gap-6 pb-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-black text-slate-950">Reach us directly</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>hello@tevexxo.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        <form className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">Name<input placeholder="Your name" /></label>
            <label className="field">Email<input type="email" placeholder="you@example.com" /></label>
            <label className="field sm:col-span-2">Message<textarea rows={5} placeholder="How can we help?" /></label>
          </div>
          <button type="submit" className="orange-button mt-4">Send message</button>
        </form>
      </section>
    </div>
  );
}
