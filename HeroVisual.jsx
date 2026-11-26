// Illustrative "transformation console": the SAP three-system landscape
// (DEV → QAS → PRD) with a transport moving through it, plus finance workstreams.
// Purely illustrative; it does not represent a real client programme.

const systems = [
  { sid: 'DEV', label: 'Development' },
  { sid: 'QAS', label: 'Quality' },
  { sid: 'PRD', label: 'Production' },
];

const workstreams = [
  { name: 'Finance core', mod: 'FI / CO', phase: 'Realize', tone: 'electric' },
  { name: 'Margin analysis', mod: 'CO-PA', phase: 'Explore', tone: 'sky' },
  { name: 'Receivables & treasury', mod: 'FSCM', phase: 'Explore', tone: 'sky' },
  { name: 'Data migration', mod: 'Mock load 2', phase: 'Realize', tone: 'electric' },
];

export default function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[28px] bg-electric/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-navy-900/80 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[0.68rem] tracking-wider text-navy-300">S/4HANA · TRANSFORMATION LANDSCAPE</span>
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-navy-400">Illustrative</span>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          {/* system landscape */}
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-navy-300">Transport path</p>
            <div className="relative mt-3 grid grid-cols-3 gap-3">
              <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-white/15">
                <span className="transport-dot absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_12px_3px_rgba(47,123,255,0.7)]" />
              </div>
              {systems.map((s, i) => (
                <div
                  key={s.sid}
                  className={`relative rounded-lg border px-3 py-3 text-center ${
                    i === 2 ? 'border-electric/60 bg-electric/10' : 'border-white/10 bg-navy-950/70'
                  }`}
                >
                  <p className="font-mono text-base font-semibold text-white">{s.sid}</p>
                  <p className="mt-0.5 text-[0.7rem] text-navy-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* workstreams */}
          <div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-navy-300">Workstreams</p>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-navy-400">Phase</p>
            </div>
            <ul className="mt-3 divide-y divide-white/[0.06] rounded-lg border border-white/10 bg-navy-950/60">
              {workstreams.map((w) => (
                <li key={w.name} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-[0.85rem] font-medium text-white">{w.name}</p>
                    <p className="font-mono text-[0.68rem] text-navy-300">{w.mod}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-wider ${
                      w.tone === 'electric' ? 'bg-electric/15 text-electric-300' : 'bg-white/[0.06] text-navy-200'
                    }`}
                  >
                    {w.phase}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* deployment */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-navy-950/60 px-4 py-3">
              <p className="font-mono text-[0.64rem] uppercase tracking-wider text-navy-300">Deployment</p>
              <p className="mt-1 text-[0.85rem] font-medium text-white">Private Cloud</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-navy-950/60 px-4 py-3">
              <p className="font-mono text-[0.64rem] uppercase tracking-wider text-navy-300">Approach</p>
              <p className="mt-1 text-[0.85rem] font-medium text-white">Brownfield conversion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
