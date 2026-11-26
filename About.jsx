import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import { Button, Container, Eyebrow, SectionHeader } from '../components/ui.jsx';
import { company, values } from '../data/content.js';

const commitments = [
  'Clear scope, transparent estimates and regular progress reporting.',
  'Consultants with relevant expertise assigned to your engagement.',
  'Design decisions and configuration documented in plain language.',
  'Data handled securely and confidentially, under agreed terms.',
  'Knowledge transfer planned from day one, not left to the final week.',
  'Honest advice on scope, risk and timelines, even when it is unwelcome.',
];

export default function About({ navigate }) {
  return (
    <>
      <PageHero
        eyebrow="About InnovateTech"
        title="Technology consulting with a focus on business outcomes."
        lead={`InnovateTech is an enterprise technology consultancy founded in ${company.founded}. We help organisations modernise business processes, optimise enterprise systems and accelerate digital transformation.`}
      />

      {/* Story */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="story-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Our story</Eyebrow>
            <h2 id="story-title" className="mt-4 font-display text-[clamp(1.85rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-navy-950">Founded in {company.founded}.</h2>
          </div>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-slate-600 lg:col-span-8">
            <p className="text-lg text-navy-900">
              InnovateTech was established to give organisations a focused partner for SAP and enterprise technology: specialist enough to handle complex finance and integration work, and close enough to the client to stay accountable for the result.
            </p>
            <p>
              Enterprise systems sit at the centre of how businesses record, control and plan. When they are designed well, finance teams close with confidence, operations run on reliable data and leaders can act quickly. When they are not, the cost shows up in manual workarounds, delayed reporting and difficult audits.
            </p>
            <p>
              We set up InnovateTech to close that gap, combining SAP S/4HANA, FI/CO and treasury expertise with process optimisation, data migration and technology advisory, so clients can move from strategy to a working, well-governed system.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-navy-950 py-20 text-white md:py-28" aria-label="Vision and mission">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { icon: 'eye', label: 'Our vision', text: 'To be a trusted enterprise technology partner for organisations that want their systems to be a source of clarity, control and competitive advantage.' },
            { icon: 'flag', label: 'Our mission', text: 'To help clients modernise processes, optimise enterprise systems and accelerate digital transformation through expert consulting, careful delivery and lasting knowledge transfer.' },
          ].map((b) => (
            <div key={b.label} className="rounded-[12px] border border-white/10 bg-navy-900/60 p-8 md:p-10">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-electric text-white"><Icon name={b.icon} className="size-6" /></span>
              <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-electric-300">{b.label}</p>
              <p className="mt-4 font-display text-[1.4rem] leading-snug tracking-[-0.01em] text-white md:text-[1.6rem]">{b.text}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="values-title">
        <Container>
          <SectionHeader eyebrow="Our values" title={<span id="values-title">The principles behind every engagement.</span>} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <li key={v.title} className="group rounded-[10px] border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/50 hover:shadow-[0_20px_40px_-24px_rgba(10,22,48,0.35)]">
                <Icon name={v.icon} className="size-6 text-electric" />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{v.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Commitment */}
      <section className="bg-mist py-20 md:py-28" aria-labelledby="commitment-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Our commitment to clients"
              title={<span id="commitment-title">What you can expect from working with us.</span>}
              lead="These commitments apply to every engagement, whatever its size."
            />
            <Button className="mt-9" onClick={() => navigate('contact')}>Discuss your requirements</Button>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {commitments.map((c) => (
              <li key={c} className="flex gap-3 bg-white p-6 text-[0.95rem] leading-relaxed text-navy-900">
                <Icon name="check" className="mt-1 size-4 shrink-0 text-electric" />{c}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
