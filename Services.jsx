import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import { Button, Container } from '../components/ui.jsx';
import { pillars } from '../data/content.js';

export default function Services({ navigate, enquire }) {
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="SAP, digital transformation and enterprise technology services."
        lead="Choose a single specialist service or combine them into a complete programme. Every engagement follows our Discover, Design, Implement, Optimize approach."
      >
        <div className="mt-9 flex flex-wrap gap-2">
          {pillars.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => jump(p.id)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-navy-100 transition-colors hover:border-electric hover:text-white focus-visible:outline-2 focus-visible:outline-electric-300"
            >
              <Icon name={p.icon} className="size-4 text-electric-300" />{p.title}
            </button>
          ))}
        </div>
      </PageHero>

      {pillars.map((p, idx) => (
        <section key={p.id} id={p.id} className={`scroll-mt-20 py-20 md:py-24 ${idx % 2 ? 'bg-mist' : 'bg-white'}`} aria-labelledby={`${p.id}-title`}>
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-navy-950 text-electric-300"><Icon name={p.icon} className="size-7" /></span>
                <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-electric">{p.code} · {p.services.length} services</p>
                <h2 id={`${p.id}-title`} className="mt-3 font-display text-[clamp(1.75rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-navy-950">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{p.summary}</p>
                <Button variant="dark" className="mt-8" onClick={() => enquire('')}>Enquire about {p.title}</Button>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {p.services.map((s) => (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => enquire(s.name)}
                    className="group flex h-full w-full flex-col rounded-[10px] border border-line bg-white p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:shadow-[0_20px_40px_-24px_rgba(10,22,48,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                  >
                    <h3 className="font-display text-[1.06rem] font-semibold text-navy-950">{s.name}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-600">{s.desc}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.85rem] font-semibold text-electric">
                      Enquire <Icon name="arrow" className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="bg-navy-950 py-16 text-white md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight tracking-[-0.02em]">Not sure which service fits?</h2>
            <p className="mt-3 text-navy-200">Describe your situation and we will recommend where to start.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => enquire('General enquiry')}>Contact Us</Button>
            <Button variant="ghostLight" icon={null} onClick={() => navigate('home', 'approach')}>See our approach</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
