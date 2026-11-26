# InnovateTech — Corporate Website

React 19 + Tailwind CSS 4 + Vite. Hash-routed single-page site: Home, About, Services, Contact.

## Run

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
```

## Structure

```
src/
  data/content.js        All copy, services, industries, values (edit here)
  components/            Logo, Navbar, Footer, Icon, ui (Button, SectionHeader…),
                         HeroVisual, ServiceCard, PageHero, ContactForm
  pages/                 Home, About, Services, Contact
  App.jsx                Routing (#about, #services, #contact), page titles, scroll handling
  index.css              Tailwind theme tokens (navy / electric blue), fonts, animations
```

## Before launch: replace placeholders

- `company.email` and `company.location` in `src/data/content.js` (shown with a "Placeholder" tag; set the `*Placeholder` flags to `false` once real).
- `submitEnquiry()` in `src/components/ContactForm.jsx` validates the form but does not send anything yet.
  Connect it to your backend, CRM or a form service (e.g. a serverless function that emails your team).
- The hero "transformation landscape" panel is illustrative and is labelled as such.
- No client names, testimonials, certifications or statistics are included. Add them only once verified.

## Accessibility & SEO

Semantic landmarks, skip link, visible focus states, `aria-current` navigation, labelled form fields with
inline errors plus a focusable error summary, reduced-motion support, per-page `<title>`, meta description
and JSON-LD organisation data in `index.html`.

`scripts/build-artifact.mjs` builds a single self-contained HTML preview. You don't need it for deployment.
