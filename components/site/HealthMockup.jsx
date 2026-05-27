'use client'
// Stylized LIMS / Health Suite dashboard mockup — pure SVG/HTML. No screenshot.
export function HealthMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0E2A55] shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-4 text-xs text-white/40">vertex-health-suite · LIMS</span>
      </div>

      <div className="grid grid-cols-12 gap-0 p-0">
        {/* sidebar */}
        <div className="col-span-3 border-r border-white/10 p-4">
          <div className="mb-4 text-[10px] uppercase tracking-[0.15em] text-white/40">Modules</div>
          {['LIMS', 'Banque sang', 'Pharmacie', 'Patients', 'Facturation', 'Reporting'].map((m, i) => (
            <div key={m} className={`mb-1.5 rounded-md px-3 py-2 text-[12px] ${i === 0 ? 'bg-vertex-blue/20 text-white' : 'text-white/55'}`}>
              {m}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="col-span-9 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-white/40">Laboratoire · vue d'ensemble</div>
              <div className="font-serif text-lg text-white">Échantillons du jour</div>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="rounded bg-vertex-health/20 px-2 py-1 text-vertex-health">● en ligne</span>
              <span className="rounded bg-white/10 px-2 py-1 text-white/60">DHIS2 sync</span>
            </div>
          </div>

          {/* KPIs */}
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { k: 'Reçus', v: '247', c: '#5BA9E8' },
              { k: 'Validés', v: '189', c: '#10B981' },
              { k: 'En attente', v: '58', c: '#F59E0B' },
            ].map((kpi) => (
              <div key={kpi.k} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[10px] uppercase tracking-wider text-white/45">{kpi.k}</div>
                <div className="mt-1 font-serif text-2xl" style={{ color: kpi.c }}>{kpi.v}</div>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] text-white/55">Throughput · 7 jours</div>
              <div className="text-[10px] text-white/35">unités</div>
            </div>
            <svg viewBox="0 0 320 90" className="w-full">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5BA9E8" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#5BA9E8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,70 L40,55 L80,62 L120,40 L160,48 L200,28 L240,35 L280,18 L320,24 L320,90 L0,90 Z" fill="url(#area)" />
              <path d="M0,70 L40,55 L80,62 L120,40 L160,48 L200,28 L240,35 L280,18 L320,24" fill="none" stroke="#5BA9E8" strokeWidth="1.75" />
              {[[0,70],[40,55],[80,62],[120,40],[160,48],[200,28],[240,35],[280,18],[320,24]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" />
              ))}
            </svg>
          </div>

          {/* recent rows */}
          <div className="mt-3 grid grid-cols-1 gap-1.5">
            {[
              ['ECH-2451', 'Hématologie', 'Validé', '#10B981'],
              ['ECH-2452', 'Biochimie', 'En cours', '#F59E0B'],
              ['ECH-2453', 'Microbiologie', 'Reçu', '#5BA9E8'],
            ].map(([id, t, s, c]) => (
              <div key={id} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px]">
                <span className="font-mono text-white/70">{id}</span>
                <span className="text-white/50">{t}</span>
                <span className="rounded px-2 py-0.5" style={{ background: `${c}22`, color: c }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthMockup
