import Logo from './Logo.jsx';
import { Container, PlaceholderTag } from './ui.jsx';
import { company, pillars } from '../data/content.js';

export default function Footer({ navigate }) {
  const link = (label, page, section) => (
    <li key={label}>
      <a
        href={`#${page}`}
        onClick={(e) => { e.preventDefault(); navigate(page, section); }}
        className="rounded-sm text-[0.92rem] text-navy-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-300"
      >
        {label}
      </a>
    </li>
  );

  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs font-display text-lg leading-snug text-white">{company.tagline}</p>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed">
              Enterprise technology consulting for SAP, finance transformation and digital modernisation. Founded {company.founded}.
            </p>
          </div>

          <nav aria-label="Footer services" className="md:col-span-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-navy-400">Services</p>
            <ul className="mt-5 space-y-3">
              {pillars.map((p) => link(p.title, 'services', p.id))}
            </ul>
          </nav>

          <nav aria-label="Footer company" className="md:col-span-2">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-navy-400">Company</p>
            <ul className="mt-5 space-y-3">
              {link('About us', 'about')}
              {link('Our approach', 'home', 'approach')}
              {link('Industries', 'home', 'industries')}
              {link('Contact', 'contact')}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-navy-400">Get in touch</p>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              <li className="select-all break-all text-white">{company.email}{company.emailPlaceholder && <PlaceholderTag />}</li>
              <li>{company.location}{company.locationPlaceholder && <PlaceholderTag />}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.82rem] text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono text-[0.72rem] tracking-wider">SAP and S/4HANA are trademarks of SAP SE.</p>
        </div>
      </Container>
    </footer>
  );
}
