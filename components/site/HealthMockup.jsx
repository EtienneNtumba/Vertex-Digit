'use client'
import { useState } from 'react'

const MODULES = [
  { key: 'lims', label: 'LIMS' },
  { key: 'blood', label: 'Banque de sang' },
  { key: 'pharmacy', label: 'Pharmacie' },
  { key: 'patients', label: 'Patients' },
]

function Sidebar({ active }) {
  const items = ['LIMS', 'Banque sang', 'Pharmacie', 'Patients', 'Facturation', 'Reporting']
  return (
    <div className="col-span-3 border-r border-white/10 p-4">
      <div className="mb-4 text-[10px] uppercase tracking-[0.15em] text-white/40">Modules</div>
      {items.map((m) => {
        const isActive =
          (active === 'lims' && m === 'LIMS') ||
          (active === 'blood' && m === 'Banque sang') ||
          (active === 'pharmacy' && m === 'Pharmacie') ||
          (active === 'patients' && m === 'Patients')
        return (
          <div
            key={m}
            className={`mb-1.5 rounded-md px-3 py-2 text-[12px] ${isActive ? 'bg-vertex-blue/20 text-white' : 'text-white/55'}`}
          >
            {m}
          </div>
        )
      })}
    </div>
  )
}

function Kpi({ k, v, c }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/45">{k}</div>
      <div className="mt-1 font-serif text-2xl" style={{ color: c }}>{v}</div>
    </div>
  )
}

function LimsView() {
  return (
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
      <div className="mb-4 grid grid-cols-3 gap-3">
        <Kpi k="Reçus" v="247" c="#5BA9E8" />
        <Kpi k="Validés" v="189" c="#10B981" />
        <Kpi k="En attente" v="58" c="#F59E0B" />
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[11px] text-white/55">Throughput · 7 jours</div>
          <div className="text-[10px] text-white/35">unités</div>
        </div>
        <svg viewBox="0 0 320 90" className="w-full">
          <defs>
            <linearGradient id="area-lims" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5BA9E8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#5BA9E8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 L40,55 L80,62 L120,40 L160,48 L200,28 L240,35 L280,18 L320,24 L320,90 L0,90 Z" fill="url(#area-lims)" />
          <path d="M0,70 L40,55 L80,62 L120,40 L160,48 L200,28 L240,35 L280,18 L320,24" fill="none" stroke="#5BA9E8" strokeWidth="1.75" />
          {[[0,70],[40,55],[80,62],[120,40],[160,48],[200,28],[240,35],[280,18],[320,24]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" />
          ))}
        </svg>
      </div>
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
  )
}

function BloodBankView() {
  const groups = [
    { g: 'O+', v: 92, c: '#EF4444' },
    { g: 'O-', v: 24, c: '#B91C1C' },
    { g: 'A+', v: 78, c: '#F59E0B' },
    { g: 'A-', v: 18, c: '#D97706' },
    { g: 'B+', v: 61, c: '#5BA9E8' },
    { g: 'B-', v: 14, c: '#1B6FD4' },
    { g: 'AB+', v: 41, c: '#10B981' },
    { g: 'AB-', v: 14, c: '#059669' },
  ]
  const max = Math.max(...groups.map((x) => x.v))
  return (
    <div className="col-span-9 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/40">Banque de sang · stock temps réel</div>
          <div className="font-serif text-lg text-white">Poches disponibles</div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="rounded bg-vertex-health/20 px-2 py-1 text-vertex-health">● en ligne</span>
          <span className="rounded bg-white/10 px-2 py-1 text-white/60">Traçabilité</span>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-3">
        <Kpi k="Disponibles" v="342" c="#10B981" />
        <Kpi k="Réservées" v="47" c="#5BA9E8" />
        <Kpi k="Périmées 7j" v="8" c="#F59E0B" />
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[11px] text-white/55">Répartition par groupe sanguin</div>
          <div className="text-[10px] text-white/35">poches</div>
        </div>
        <div className="grid grid-cols-8 items-end gap-2" style={{ height: 90 }}>
          {groups.map((it) => (
            <div key={it.g} className="flex h-full flex-col items-center justify-end gap-1.5">
              <span className="text-[10px] text-white/70">{it.v}</span>
              <div className="w-full rounded-t" style={{ height: `${(it.v / max) * 70}%`, background: it.c }} />
              <span className="text-[9px] font-mono text-white/50">{it.g}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-1.5">
        {[
          ['DON-1042', 'M. Kabongo', 'O+', 'Qualifié', '#10B981'],
          ['DON-1043', 'N. Mwamba', 'A-', 'Dépistage', '#F59E0B'],
          ['DON-1044', 'J. Lombe', 'B+', 'Stocké', '#5BA9E8'],
        ].map(([id, name, group, status, c]) => (
          <div key={id} className="grid grid-cols-4 items-center rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px]">
            <span className="font-mono text-white/70">{id}</span>
            <span className="text-white/50">{name}</span>
            <span className="font-mono text-white/70">{group}</span>
            <span className="justify-self-end rounded px-2 py-0.5" style={{ background: `${c}22`, color: c }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PharmacyView() {
  const days = [24, 32, 28, 41, 36, 45, 38]
  const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const maxD = Math.max(...days)
  return (
    <div className="col-span-9 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/40">Pharmacie · vue d'ensemble</div>
          <div className="font-serif text-lg text-white">Dispensations du jour</div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="rounded bg-vertex-health/20 px-2 py-1 text-vertex-health">● en ligne</span>
          <span className="rounded bg-white/10 px-2 py-1 text-white/60">Lots & péremptions</span>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-3">
        <Kpi k="Références" v="1 247" c="#5BA9E8" />
        <Kpi k="Ruptures" v="12" c="#EF4444" />
        <Kpi k="Alertes péremption" v="34" c="#F59E0B" />
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[11px] text-white/55">Dispensations · 7 jours</div>
          <div className="text-[10px] text-white/35">boîtes</div>
        </div>
        <div className="grid grid-cols-7 items-end gap-3" style={{ height: 90 }}>
          {days.map((v, i) => (
            <div key={i} className="flex h-full flex-col items-center justify-end gap-1.5">
              <span className="text-[10px] text-white/70">{v}</span>
              <div className="w-full rounded-t" style={{ height: `${(v / maxD) * 70}%`, background: 'linear-gradient(180deg, #5BA9E8, #1B6FD4)' }} />
              <span className="text-[9px] font-mono text-white/50">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-1.5">
        {[
          ['MED-A012', 'Amoxicilline 500mg', 'x 20', 'Dispensé', '#10B981'],
          ['MED-P047', 'Paracétamol 1g', 'x 12', 'Dispensé', '#10B981'],
          ['MED-Q009', 'Quinine inj.', 'x 4', 'Alerte lot', '#F59E0B'],
        ].map(([id, name, qty, status, c]) => (
          <div key={id} className="grid grid-cols-4 items-center rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px]">
            <span className="font-mono text-white/70">{id}</span>
            <span className="text-white/60">{name}</span>
            <span className="font-mono text-white/50">{qty}</span>
            <span className="justify-self-end rounded px-2 py-0.5" style={{ background: `${c}22`, color: c }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatientsView() {
  const timeline = [
    { d: '12 mai 2025', t: 'Consultation', dept: 'Médecine interne', c: '#5BA9E8' },
    { d: '04 avr. 2025', t: 'Admission', dept: 'Hôpital de jour', c: '#1B6FD4' },
    { d: '18 mars 2025', t: 'Analyses labo', dept: 'Hématologie', c: '#10B981' },
    { d: '02 fév. 2025', t: 'Consultation', dept: 'Cardiologie', c: '#5BA9E8' },
  ]
  return (
    <div className="col-span-9 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/40">Dossier patient · longitudinal</div>
          <div className="font-serif text-lg text-white">N. Kabongo · 34 ans</div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="rounded bg-vertex-health/20 px-2 py-1 text-vertex-health">● FHIR</span>
          <span className="rounded bg-white/10 px-2 py-1 text-white/60">ID PAT-04127</span>
        </div>
      </div>

      {/* Patient meta bar */}
      <div className="mb-4 grid grid-cols-4 gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[11px]">
        <div>
          <div className="text-white/40">Groupe</div>
          <div className="mt-0.5 font-mono text-white/80">O+</div>
        </div>
        <div>
          <div className="text-white/40">Allergies</div>
          <div className="mt-0.5 text-white/80">Pénicilline</div>
        </div>
        <div>
          <div className="text-white/40">Mutuelle</div>
          <div className="mt-0.5 text-white/80">MutSanté RDC</div>
        </div>
        <div>
          <div className="text-white/40">Médecin réf.</div>
          <div className="mt-0.5 text-white/80">Dr. Lokombe</div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-3">
        <Kpi k="Consultations 12m" v="12" c="#5BA9E8" />
        <Kpi k="Prescriptions actives" v="3" c="#10B981" />
        <Kpi k="Hospitalisations" v="1" c="#F59E0B" />
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[11px] text-white/55">Historique</div>
          <div className="text-[10px] text-white/35">4 derniers événements</div>
        </div>
        <ol className="relative ml-2 border-l border-white/10 pl-4">
          {timeline.map((ev, i) => (
            <li key={i} className="mb-3 last:mb-0">
              <span className="absolute -left-[5px] mt-1 h-2.5 w-2.5 rounded-full ring-2 ring-[#0E2A55]" style={{ background: ev.c }} />
              <div className="flex items-baseline justify-between gap-3 text-[11px]">
                <span className="text-white/80">{ev.t} · <span className="text-white/50">{ev.dept}</span></span>
                <span className="font-mono text-white/40">{ev.d}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Active prescriptions */}
      <div className="mt-3">
        <div className="mb-2 flex items-center justify-between text-[11px]">
          <span className="text-white/55">Prescriptions actives</span>
          <span className="text-white/35">renouvelé 12 mai</span>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          {[
            ['Amlodipine 5mg', '1 comp. / jour', '30j', '#10B981'],
            ['Metformine 500mg', '2 comp. / jour', '90j', '#10B981'],
            ['Atorvastatine 20mg', '1 comp. / soir', '30j', '#5BA9E8'],
          ].map(([m, dose, dur, c]) => (
            <div key={m} className="grid grid-cols-[1.6fr_1.2fr_0.6fr_0.6fr] items-center rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px]">
              <span className="text-white/80">{m}</span>
              <span className="text-white/50">{dose}</span>
              <span className="font-mono text-white/50">{dur}</span>
              <span className="justify-self-end rounded px-2 py-0.5" style={{ background: `${c}22`, color: c }}>Actif</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HealthMockup() {
  const [active, setActive] = useState('lims')
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0E2A55] shadow-2xl">
      <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <div className="flex flex-wrap gap-1">
          {MODULES.map((m) => (
            <button
              key={m.key}
              onClick={() => setActive(m.key)}
              className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${active === m.key ? 'bg-white/10 text-white' : 'text-white/45 hover:text-white/80'}`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <span className="ml-auto hidden text-[10px] text-white/30 md:inline">vertex-health-suite</span>
      </div>

      <div className="grid grid-cols-12">
        <Sidebar active={active} />
        {active === 'lims' && <LimsView />}
        {active === 'blood' && <BloodBankView />}
        {active === 'pharmacy' && <PharmacyView />}
        {active === 'patients' && <PatientsView />}
      </div>
    </div>
  )
}

export default HealthMockup
