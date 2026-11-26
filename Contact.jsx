import PageHero from '../components/PageHero.jsx';
import { ContactSection } from './Home.jsx';

export default function Contact({ presetService }) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with InnovateTech."
        lead="Whether you are planning an S/4HANA programme, improving finance processes or reviewing your technology strategy, we would welcome the chance to understand your priorities."
      />
      <ContactSection presetService={presetService} standalone />
    </>
  );
}
