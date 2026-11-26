import Icon from '../components/Icon.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { Button, Container, Eyebrow, PlaceholderTag, SectionHeader } from '../components/ui.jsx';
import { approach, company, industries, pillars, whyUs } from '../data/content.js';

function Hero({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white" aria-labelledby="hero-title">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-14 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
        <div className="reveal">
          <Eyebrow tone="light">IT · SAP · Enterprise technology consulting</Eyebrow>
          <h1 id="hero-title" className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.1rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance">
            Engineering the Future of <span className="text-electric-300">Enterprise Technology.</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-relaxed text-navy-200 md:text-lg">
            InnovateTech helps organisations modernise business processes, optimise enterprise systems and accelerate digital transformation, with deep expertise in SAP S/4HANA, finance and controlling, treasury and system integration.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => navigate('home', 'expertise')}>Explore Our Services</Button>
            <Button variant="ghostLight" icon={null} onClick={() => navigate('contact')}>Contact Us</Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[['Focus', 'SAP finance'], ['Delivery', 'Senior-led'], ['Founded', String(company.founded)]].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-navy-400">{k}</dt>
                <dd className="mt-1.5 font-display text-[0.98rem] font-medium text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal reveal-delay">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

function AboutTeaser({ navigate }) {
  return (
    <section id="about-intro" className="bg-white py-20 md:py-28" aria-labelledby="about-intro-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>About InnovateTech</Eyebrow>
          <h2 id="about-intro-title" className="mt-4 font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-navy-950 text-balance">
            A consultancy built for technology-driven business transformation.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-navy-900">
            Founded in {company.founded}, InnovateTech brings together SAP consulting, finance process expertise and enterprise technology advisory in one focused team.
          </p>
          <p className="mt-5 leading-relaxed text-slate-600">
            We work with finance, IT and operations leaders who need their enterprise systems to do more: close faster, report with confidence, integrate cleanly and scale with the business. Our role is to design the right solution, deliver it carefully and leave your teams able to run it.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ['database', 'SAP S/4HANA', 'Implementation, migration and support'],
              ['finance', 'Finance', 'FI/CO, CO-PA, FSCM and treasury'],
              ['workflow', 'Transformation', 'Process, data and integration'],
            ].map(([icon, t, d]) => (
              <div key={t} className="rounded-lg bg-mist p-5">
                <Icon name={icon} className="size-5 text-electric" />
                <p className="mt-3 font-display font-semibold text-navy-950">{t}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <Button variant="ghostDark" className="mt-9" onClick={() => navigate('about')}>Read our story</Button>
        </div>
      </Container>
    </section>
  );
}

function Expertise({ navigate }) {
  return (
    <section id="expertise" className="scroll-mt-20 bg-mist py-20 md:py-28" aria-labelledby="expertise-title">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Our expertise"
            title={<span id="expertise-title">Three practices. One accountable team.</span>}
            lead="From SAP finance configuration to enterprise IT strategy, our services are designed to work together across the full life of your systems."
          />
          <Button variant="ghostDark" className="shrink-0" onClick={() => navigate('services')}>All services</Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <ServiceCard key={p.id} pillar={p} onExplore={() => navigate('services', p.id)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="bg-white py-20 md:py-28" aria-labelledby="why-title">
      <Container>
        <SectionHeader
          eyebrow="Why choose InnovateTech"
          title={<span id="why-title">Enterprise rigour, without enterprise overhead.</span>}
          lead="We combine specialist SAP finance knowledge with a practical, transparent way of working."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="group bg-white p-8 transition-colors duration-300 hover:bg-mist">
              <span className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-electric transition-colors duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                <Icon name={w.icon} className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{w.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-600">{w.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-navy-950 py-20 text-white md:py-28" aria-labelledby="approach-title">
      <Container>
        <SectionHeader
          tone="light"
          eyebrow="Our approach"
          title={<span id="approach-title">Discover. Design. Implement. Optimize.</span>}
          lead="A structured four-phase method that keeps scope, risk and business value visible at every stage."
        />
        <div className="relative mt-16">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-electric/70 via-white/15 to-white/5 lg:block" />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <li key={a.step} className="group relative flex flex-col">
              <div className="flex items-center gap-4">
                <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-electric-300 transition-all duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                  <Icon name={a.icon} className="size-6" />
                </span>
                <span className="font-mono text-sm text-navy-400">Phase {i + 1}</span>
              </div>
              <div className="mt-6 flex-1 rounded-[10px] border border-white/10 bg-navy-900/60 p-6 transition-colors duration-300 group-hover:border-electric/40">
                <h3 className="font-display text-xl font-semibold">{a.step}</h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-navy-200">{a.text}</p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {a.outputs.map((o) => (
                    <li key={o} className="flex gap-2 text-[0.85rem] text-navy-100">
                      <Icon name="check" className="mt-[3px] size-3.5 shrink-0 text-electric-300" />{o}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-white py-20 md:py-28" aria-labelledby="industries-title">
      <Container>
        <SectionHeader
          eyebrow="Industries we serve"
          title={<span id="industries-title">Built for complex, process-intensive organisations.</span>}
          lead="Our SAP and enterprise technology services apply wherever finance accuracy, integration and scale matter."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <li key={ind.name} className="group rounded-[10px] border border-line p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-950 hover:bg-navy-950">
              <Icon name={ind.icon} className="size-6 text-electric transition-colors group-hover:text-electric-300" />
              <h3 className="mt-5 font-display font-semibold text-navy-950 transition-colors group-hover:text-white">{ind.name}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate-600 transition-colors group-hover:text-navy-200">{ind.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ContactSection({ presetService, standalone = false }) {
  return (
    <section id="contact-section" className={`scroll-mt-20 bg-mist ${standalone ? 'py-16 md:py-24' : 'py-20 md:py-28'}`} aria-labelledby="contact-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact and business enquiries"
            title={<span id="contact-title">Let’s discuss your enterprise priorities.</span>}
            lead="Tell us about your systems, objectives and timeline. We’ll arrange an initial conversation with a consultant who understands your area."
          />
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-electric-300"><Icon name="mail" /></span>
              <div className="min-w-0">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-500">Email</p>
                <p className="mt-1 select-all break-all font-medium text-navy-950">{company.email}{company.emailPlaceholder && <PlaceholderTag />}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-electric-300"><Icon name="pin" /></span>
              <div className="min-w-0">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-500">Office</p>
                <p className="mt-1 font-medium text-navy-950">{company.location}{company.locationPlaceholder && <PlaceholderTag />}</p>
              </div>
            </li>
          </ul>
          <div className="mt-10 rounded-[10px] border border-line bg-white p-6">
            <p className="font-display font-semibold text-navy-950">What happens next</p>
            <ol className="mt-4 space-y-3 text-[0.92rem] text-slate-600">
              {['We review your enquiry and match it to the right consultant.', 'We schedule an introductory call to understand your context.', 'If there is a fit, we propose a scoped next step.'].map((t, i) => (
                <li key={t} className="flex gap-3"><span className="font-mono text-xs leading-6 text-electric">0{i + 1}</span>{t}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm presetService={presetService} />
        </div>
      </Container>
    </section>
  );
}

export default function Home({ navigate, presetService }) {
  return (
    <>
      <Hero navigate={navigate} />
      <AboutTeaser navigate={navigate} />
      <Expertise navigate={navigate} />
      <WhyUs />
      <Approach />
      <Industries />
      <ContactSection presetService={presetService} />
    </>
  );
}
