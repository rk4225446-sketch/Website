import { Container, Eyebrow } from './ui.jsx';

export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="reveal max-w-3xl">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-200 md:text-lg">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}
