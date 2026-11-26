import Icon from './Icon.jsx';

export function Container({ className = '', children }) {
  return <div className={`gutter mx-auto w-full max-w-[1240px] ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = 'dark' }) {
  return (
    <p className={`font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] ${tone === 'light' ? 'text-electric-300' : 'text-electric'}`}>
      <span aria-hidden="true" className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-current align-middle" />
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title, lead, tone = 'dark', align = 'left', className = '' }) {
  const light = tone === 'light';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-balance ${light ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {lead && <p className={`mt-5 text-[1.0625rem] leading-relaxed ${light ? 'text-navy-200' : 'text-slate-600'}`}>{lead}</p>}
    </div>
  );
}

const variants = {
  primary: 'bg-electric text-white hover:bg-electric-600 shadow-[0_8px_24px_-12px_rgba(47,123,255,0.9)]',
  ghostLight: 'border border-white/25 text-white hover:border-white/60 hover:bg-white/5',
  ghostDark: 'border border-navy-950/20 text-navy-950 hover:border-navy-950/60 hover:bg-navy-950/[0.03]',
  dark: 'bg-navy-950 text-white hover:bg-navy-800',
};

export function Button({ variant = 'primary', icon = 'arrow', className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-3 text-[0.9375rem] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}

export function PlaceholderTag({ children = 'Placeholder' }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-sm border border-dashed border-amber-500/70 px-1.5 py-0.5 align-middle font-mono text-[0.62rem] font-medium uppercase tracking-wider text-amber-600">
      {children}
    </span>
  );
}
