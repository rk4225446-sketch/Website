import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import { navItems } from './data/content.js';

const PAGES = navItems.map((n) => n.id);
const TITLES = {
  home: 'InnovateTech | SAP & Enterprise Technology Consulting',
  about: 'About Us | InnovateTech',
  services: 'Services | InnovateTech',
  contact: 'Contact | InnovateTech',
};

const readPage = () => {
  const h = window.location.hash.replace('#', '');
  return PAGES.includes(h) ? h : 'home';
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  return true;
}

export default function App() {
  const [page, setPage] = useState(readPage);
  const [pendingSection, setPendingSection] = useState(null);
  const [presetService, setPresetService] = useState('');

  useEffect(() => {
    const onHash = () => setPage(readPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.title = TITLES[page];
    if (pendingSection) {
      requestAnimationFrame(() => {
        scrollToSection(pendingSection);
        setPendingSection(null);
      });
    } else {
      window.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const navigate = useCallback((target, section) => {
    if (target === page) {
      if (section) scrollToSection(section);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPendingSection(section || null);
    if (target === 'home' && !section) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
      setPage('home');
    } else {
      window.location.hash = target;
    }
  }, [page]);

  const enquire = useCallback((service) => {
    setPresetService(service);
    navigate('contact');
  }, [navigate]);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }} className="sr-only z-[60] rounded-md bg-electric px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar page={page} navigate={navigate} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none" key={page}>
        {page === 'home' && <Home navigate={navigate} presetService={presetService} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'services' && <Services navigate={navigate} enquire={enquire} />}
        {page === 'contact' && <Contact presetService={presetService} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
