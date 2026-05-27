'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useI18n } from './i18n'

const LOGO = 'https://customer-assets.emergentagent.com/job_vertex-congo/artifacts/snvh1pjr_vertex-logo.jpeg'

export function Header() {
  const { d, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { href: '/a-propos', label: d.nav.about },
    { href: '/expertise', label: d.nav.expertise },
    { href: '/solutions/vertex-health-suite', label: d.nav.solutions },
    { href: '/projets', label: d.nav.projects },
    { href: '/equipe', label: d.nav.team },
    { href: '/insights', label: d.nav.insights },
    { href: '/contact', label: d.nav.contact },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-vertex-line/70 bg-white/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-v flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="VERTEX Congo">
          <div
            className="h-10 w-10 flex-none rounded-md bg-white ring-1 ring-vertex-line"
            style={{
              backgroundImage: `url(${LOGO})`,
              backgroundSize: '260% 260%',
              backgroundPosition: 'center 52%',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[17px] text-vertex-navy">VERTEX Congo</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-vertex-muted">Vertex Développement</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-vertex-slate transition-colors hover:text-vertex-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 text-[12px] font-medium md:flex">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 transition-colors ${lang === 'fr' ? 'text-vertex-navy' : 'text-vertex-muted hover:text-vertex-navy'}`}
              aria-pressed={lang === 'fr'}
            >FR</button>
            <span className="text-vertex-line">/</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-vertex-navy' : 'text-vertex-muted hover:text-vertex-navy'}`}
              aria-pressed={lang === 'en'}
            >EN</button>
          </div>

          <Link href="/contact" className="hidden v-btn-primary !py-2 !px-4 !text-[13px] md:inline-flex">
            {d.nav.cta}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-vertex-line bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-vertex-line bg-white lg:hidden">
          <nav className="container-v flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-[15px] text-vertex-slate hover:bg-vertex-offwhite"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-vertex-line pt-3">
              <div className="flex items-center gap-1 text-[13px] font-medium">
                <button onClick={() => setLang('fr')} className={`px-2 py-1 ${lang === 'fr' ? 'text-vertex-navy' : 'text-vertex-muted'}`}>FR</button>
                <span className="text-vertex-line">/</span>
                <button onClick={() => setLang('en')} className={`px-2 py-1 ${lang === 'en' ? 'text-vertex-navy' : 'text-vertex-muted'}`}>EN</button>
              </div>
              <Link href="/contact" onClick={() => setOpen(false)} className="v-btn-primary !py-2 !px-4 !text-[13px]">
                {d.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
