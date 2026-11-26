import Icon from './Icon.jsx';

export default function ServiceCard({ pillar, onExplore, limit = 5 }) {
  const shown = pillar.services.slice(0, limit);
  const more = pillar.services.length - shown.length;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_24px_48px_-24px_rgba(10,22,48,0.35)]">
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-lg bg-navy-950 text-electric-300 transition-colors duration-300 group-hover:bg-electric group-hover:text-white">
          <Icon name={pillar.icon} className="size-6" />
        </span>
        <span className="font-mono text-[0.7rem] tracking-[0.16em] text-slate-400">{pillar.code}</span>
      </div>
      <h3 className="mt-6 font-display text-[1.375rem] font-semibold tracking-[-0.015em] text-navy-950">{pillar.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">{pillar.summary}</p>
      <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
        {shown.map((s) => (
          <li key={s.name} className="flex gap-2.5 text-[0.9rem] text-navy-900">
            <Icon name="check" className="mt-[3px] size-4 shrink-0 text-electric" />
            <span>{s.name}</span>
          </li>
        ))}
        {more > 0 && <li className="pl-[26px] text-[0.85rem] text-slate-500">+ {more} more services</li>}
      </ul>
      <div className="mt-auto pt-7">
        <button
          type="button"
          onClick={onExplore}
          className="inline-flex items-center gap-2 rounded-sm text-[0.9rem] font-semibold text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
        >
          View {pillar.title.toLowerCase()} services
          <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-electric transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}
