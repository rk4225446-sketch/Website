import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { Container } from './ui.jsx';
import { navItems } from '../data/content.js';

export default function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-white/10 bg-navy-950/95 backdrop-blur-md' : 'border-transparent bg-navy-950'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go('home'); }}
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-300"
          aria-label="InnovateTech home"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); go(item.id); }}
                  aria-current={page === item.id ? 'page' : undefined}
                  className={`relative rounded-md px-4 py-2 text-[0.9375rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-electric-300 ${
                    page === item.id ? 'text-white' : 'text-navy-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-[17px] h-[2px] origin-left bg-electric transition-transform duration-300 ${
                      page === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => go('contact')}
            className="rounded-[6px] border border-electric/60 px-4 py-2 text-[0.875rem] font-semibold text-white transition-colors hover:bg-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-300"
          >
            Start a conversation
          </button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-electric-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="size-6" />
        </button>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-navy-950 md:hidden">
        <Container className="py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); go(item.id); }}
                  aria-current={page === item.id ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-white/5 py-4 font-display text-lg ${
                    page === item.id ? 'text-white' : 'text-navy-200'
                  }`}
                >
                  {item.label}
                  <Icon name="arrow" className={`size-4 ${page === item.id ? 'text-electric' : 'text-navy-400'}`} />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => go('contact')}
            className="mt-5 w-full rounded-[6px] bg-electric py-3 font-semibold text-white"
          >
            Start a conversation
          </button>
        </Container>
      </div>
    </header>
  );
}
