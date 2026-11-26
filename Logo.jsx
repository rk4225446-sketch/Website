// InnovateTech wordmark: a stacked "node" glyph (two offset blocks joined by a
// signal line) paired with a light/bold split of the name.
export default function Logo({ tone = 'light', className = '' }) {
  const text = tone === 'light' ? 'text-white' : 'text-navy-950';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect x="3" y="3" width="15" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-electric" />
        <rect x="14" y="14" width="15" height="15" rx="2" className="fill-electric" />
        <path d="M18 10.5h4.5V14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" className="text-electric" />
        <rect x="19" y="19" width="5" height="5" className={tone === 'light' ? 'fill-navy-950' : 'fill-white'} />
      </svg>
      <span className={`font-display text-[1.32rem] leading-none tracking-[-0.02em] ${text}`}>
        <span className="font-light">Innovate</span>
        <span className="font-semibold">Tech</span>
      </span>
    </span>
  );
}
