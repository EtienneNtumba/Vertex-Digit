'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from './i18n'

const LOGO = 'https://customer-assets.emergentagent.com/job_vertex-congo/artifacts/snvh1pjr_vertex-logo.jpeg'

export function Footer() {
  const { d, lang, setLang } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-vertex-line bg-vertex-navy text-white/75">
      <div className="container-v py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
            <div
              className="h-11 w-11 flex-none rounded-md bg-white ring-1 ring-white/10"
              style={{
                backgroundImage: `url(${LOGO})`,
                backgroundSize: '260% 260%',
                backgroundPosition: 'center 52%',
                backgroundRepeat: 'no-repeat',
              }}
              aria-hidden
            />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg text-white">VERTEX Congo</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/45">Vertex Développement</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/55">{d.footer.tagline}</p>
            <p className="mt-5 text-[13px] text-white/55">{d.footer.addr}</p>
          </div>

          {Object.entries(d.footer.sections).map(([key, section]) => (
            <div key={key}>
              <h4 className="mb-5 font-sans text-[11px] uppercase tracking-[0.15em] text-white/45">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[14px] text-white/75 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {year} VERTEX Congo SARL.</span>
            <span>{d.footer.legal.rights}</span>
            <span>·</span>
            <span>{d.footer.legal.rccm}</span>
            <span>·</span>
            <span>{d.footer.legal.nin}</span>
            {(d.footer.bottomLinks || []).map(([label, href]) => (
              <span key={label} className="flex items-center gap-x-5">
                <span>·</span>
                <Link href={href} className="text-white/55 transition-colors hover:text-white">{label}</Link>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setLang('fr')} className={`px-2 py-1 transition-colors ${lang === 'fr' ? 'text-white' : 'text-white/45 hover:text-white'}`}>FR</button>
            <span className="text-white/20">/</span>
            <button onClick={() => setLang('en')} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-white' : 'text-white/45 hover:text-white'}`}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
