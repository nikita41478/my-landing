export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-12 px-6 py-16 md:px-10 lg:px-0">
        <section className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-950/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/90 shadow-[0_0_48px_rgba(16,185,129,0.7)]">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,1)]" />
            начинающий разработчик • вайбкодинг
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Делаю свои первые пет‑проекты
            <span className="relative mt-1 block max-w-xs text-sm font-normal uppercase tracking-[0.22em] text-emerald-300/80">
              медленно, но с кайфом
              <span className="pointer-events-none absolute inset-x-4 -bottom-1 h-2 rounded-full bg-emerald-400/40 blur-[10px]" />
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Я учусь фронтенду и вайбкодингу: пробую идеи, играюсь с Tailwind и
            анимациями, постепенно собираю портфолио. Здесь можно посмотреть,
            чем я сейчас занимаюсь.
          </p>

          <a
            href="https://t.me/nsivkov"
            target="_blank"
            rel="noreferrer"
            className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-400/70 bg-emerald-500/95 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_52px_rgba(16,185,129,0.9)] transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-400"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 via-white/60 to-transparent opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
            <span>Связаться</span>
            <span className="text-base transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Навыки, которые я прокачиваю
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-50">
                  Frontend & UI
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  в процессе
                </span>
              </div>
              <p className="text-sm text-slate-300/90">
                HTML, современный CSS, адаптивная вёрстка, базовый JavaScript,
                React / Next.js.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-50">
                  Tailwind & вайбкодинг
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/80">
                  фокус
                </span>
              </div>
              <p className="text-sm text-slate-300/90">
                Быстрая сборка интерфейсов, эксперименты с цветами, градиентами,
                тенями и небольшими анимациями.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-50">
                  Инструменты разработчика
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  база
                </span>
              </div>
              <p className="text-sm text-slate-300/90">
                Git, GitHub, VS Code / Cursor, работа с консолью, настройка
                проектов на Next.js.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-50">
                  Mindset разработчика
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  важно
                </span>
              </div>
              <p className="text-sm text-slate-300/90">
                Учусь не бояться кода, пробовать идеи, рефакторить и выкладывать
                даже маленькие проекты.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
