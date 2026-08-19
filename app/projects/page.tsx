import { projects } from '@/lib/tevexxo-data';

export const metadata = { title: 'Projects — Tevexxo' };

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10">
          <p className="eyebrow text-orange-400">REAL WORLD PROJECTS</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Build. Showcase. <span className="text-orange-500">Get Hired.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Every program ends with portfolio-grade projects that mirror what teams ship in production.
          </p>
        </div>
      </header>
      <section className="container -mt-8 grid gap-5 pb-20 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${index === 1 ? 'border-orange-400 shadow-orange-100' : 'border-slate-100'}`}>
            <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
              <div className="absolute inset-0 tech-lines opacity-30" />
              <div className="relative w-4/5 rounded-xl border border-white/20 bg-slate-950/70 p-3 shadow-2xl">
                <div className="mb-3 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                </div>
                <div className="grid grid-cols-[.8fr_1.2fr] gap-2">
                  <div className="h-20 rounded bg-white/10" />
                  <div className="space-y-2">
                    <div className="h-3 w-2/3 rounded bg-orange-400/70" />
                    <div className="h-10 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-black text-slate-950">{project.title}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded bg-orange-50 px-2 py-1 text-[10px] font-semibold text-orange-600">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
