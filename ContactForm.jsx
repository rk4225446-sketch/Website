import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { serviceOptions } from '../data/content.js';

const FREE_DOMAINS = ['gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com', 'rediffmail.com'];
const EMPTY = { fullName: '', email: '', company: '', service: '', message: '' };

function validate(v) {
  const e = {};
  if (v.fullName.trim().length < 2) e.fullName = 'Enter your full name.';
  const email = v.email.trim().toLowerCase();
  if (!email) e.email = 'Enter your business email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = 'Enter an email address in the format name@company.com.';
  else if (FREE_DOMAINS.includes(email.split('@')[1])) e.email = 'Use your company email address rather than a personal one.';
  if (v.company.trim().length < 2) e.company = 'Enter your company name.';
  if (!v.service) e.service = 'Choose the service you are interested in.';
  if (v.message.trim().length < 20) e.message = 'Tell us a little more about your requirement (at least 20 characters).';
  return e;
}

const labels = { fullName: 'Full name', email: 'Business email', company: 'Company name', service: 'Service required', message: 'Message' };

// Replace this with a call to your backend, CRM or form service.
async function submitEnquiry(data) {
  await new Promise((r) => setTimeout(r, 900));
  const d = new Date();
  const ref = `IT-${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  return { ref, data };
}

export default function ContactForm({ presetService = '', compact = false }) {
  const [values, setValues] = useState({ ...EMPTY, service: presetService });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [result, setResult] = useState(null);
  const summaryRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (presetService) setValues((v) => ({ ...v, service: presetService }));
  }, [presetService]);

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  const update = (field) => (ev) => {
    const next = { ...values, [field]: ev.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };
  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setTouched({ fullName: true, email: true, company: true, service: true, message: true });
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus('sending');
    const res = await submitEnquiry(values);
    setResult(res);
    setStatus('sent');
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setResult(null);
    setStatus('idle');
  };

  if (status === 'sent' && result) {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-[10px] border border-line bg-white p-8 outline-none sm:p-10">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-electric/10 text-electric">
          <Icon name="success" className="size-6" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-950">Thank you, {result.data.fullName.split(' ')[0]}.</h3>
        <p className="mt-3 max-w-prose leading-relaxed text-slate-600">
          Your enquiry about <strong className="font-semibold text-navy-950">{result.data.service}</strong> has been recorded.
          A member of our consulting team will review it and reply to <strong className="font-semibold text-navy-950">{result.data.email}</strong>.
        </p>
        <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-lg bg-mist p-5 text-sm sm:grid-cols-2">
          <div><dt className="font-mono text-[0.68rem] uppercase tracking-wider text-slate-500">Reference</dt><dd className="mt-1 font-mono font-medium text-navy-950">{result.ref}</dd></div>
          <div><dt className="font-mono text-[0.68rem] uppercase tracking-wider text-slate-500">Company</dt><dd className="mt-1 font-medium text-navy-950">{result.data.company}</dd></div>
        </dl>
        <p className="mt-5 text-xs text-slate-500">Preview build: enquiries are validated but not yet delivered. Connect <code className="font-mono">submitEnquiry()</code> to your email or CRM service before launch.</p>
        <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-sm font-semibold text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric">
          Send another enquiry <Icon name="arrow" className="size-4" />
        </button>
      </div>
    );
  }

  const errorList = Object.keys(errors).filter((k) => touched[k]);
  const fieldClass = (f) =>
    `mt-2 block w-full rounded-[6px] border bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-4 ${
      touched[f] && errors[f] ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : 'border-line hover:border-slate-300 focus:border-electric focus:ring-electric/15'
    }`;
  const err = (f) =>
    touched[f] && errors[f] ? (
      <p id={`${f}-error`} className="mt-2 flex items-start gap-1.5 text-[0.82rem] text-red-600">
        <Icon name="alert" className="mt-[2px] size-3.5 shrink-0" />
        {errors[f]}
      </p>
    ) : null;
  const aria = (f) => ({
    'aria-invalid': touched[f] && errors[f] ? 'true' : 'false',
    'aria-describedby': touched[f] && errors[f] ? `${f}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className={`rounded-[10px] border border-line bg-white ${compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`} aria-labelledby="enquiry-title">
      <h3 id="enquiry-title" className="font-display text-xl font-semibold text-navy-950">Business enquiry</h3>
      <p className="mt-1.5 text-sm text-slate-500">All fields are required.</p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-6 rounded-[6px] border border-red-200 bg-red-50 p-4 outline-none focus:ring-4 focus:ring-red-500/15">
          <p className="text-sm font-semibold text-red-700">Please correct {errorList.length === 1 ? 'the following field' : `these ${errorList.length} fields`}:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
            {errorList.map((k) => (
              <li key={k}><a href={`#${k}`} onClick={(e) => { e.preventDefault(); document.getElementById(k)?.focus(); }} className="underline underline-offset-2">{labels[k]}</a></li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-navy-900">Full name</label>
          <input id="fullName" name="fullName" type="text" autoComplete="name" required value={values.fullName} onChange={update('fullName')} onBlur={blur('fullName')} className={fieldClass('fullName')} placeholder="Priya Sharma" {...aria('fullName')} />
          {err('fullName')}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">Business email</label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={update('email')} onBlur={blur('email')} className={fieldClass('email')} placeholder="name@company.com" {...aria('email')} />
          {err('email')}
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy-900">Company name</label>
          <input id="company" name="company" type="text" autoComplete="organization" required value={values.company} onChange={update('company')} onBlur={blur('company')} className={fieldClass('company')} placeholder="Your organisation" {...aria('company')} />
          {err('company')}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-navy-900">Service required</label>
          <div className="relative">
            <select id="service" name="service" required value={values.service} onChange={update('service')} onBlur={blur('service')} className={`${fieldClass('service')} appearance-none pr-10 ${values.service ? '' : 'text-slate-400'}`} {...aria('service')}>
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((g) => (
                <optgroup key={g.group} label={g.group}>
                  {g.options.map((o) => <option key={o} value={o} className="text-navy-950">{o}</option>)}
                </optgroup>
              ))}
              <optgroup label="Other">
                <option value="General enquiry" className="text-navy-950">General enquiry</option>
              </optgroup>
            </select>
            <Icon name="chevron" className="pointer-events-none absolute right-3.5 top-[calc(50%+4px)] size-4 -translate-y-1/2 text-slate-400" />
          </div>
          {err('service')}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-navy-900">Message</label>
          <textarea id="message" name="message" rows={5} required value={values.message} onChange={update('message')} onBlur={blur('message')} className={`${fieldClass('message')} resize-y`} placeholder="Briefly describe your systems, objectives and timeline." {...aria('message')} />
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">{err('message')}</div>
            <p className="mt-2 shrink-0 font-mono text-[0.72rem] text-slate-400" aria-live="polite">{values.message.trim().length} chars</p>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-slate-500">We use these details only to respond to your enquiry.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-electric px-6 py-3 font-semibold text-white shadow-[0_8px_24px_-12px_rgba(47,123,255,0.9)] transition-colors hover:bg-electric-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-70"
        >
          {status === 'sending' ? (<><Icon name="loader" className="size-4 animate-spin" /> Sending enquiry</>) : (<>Submit enquiry <Icon name="arrow" className="size-4" /></>)}
        </button>
      </div>
    </form>
  );
}
