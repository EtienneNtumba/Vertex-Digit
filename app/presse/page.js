'use client'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download, FileText, Mail, ImageIcon } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

const LOGO = 'https://customer-assets.emergentagent.com/job_vertex-congo/artifacts/snvh1pjr_vertex-logo.jpeg'

function PressPage() {
  const { d } = useI18n()
  const p = d.pages.press

  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        {/* Fact sheet */}
        <section className="bg-white py-20 lg:py-24">
          <div className="container-v">
            <FadeUp>
              <span className="eyebrow">{p.factSheet.eyebrow}</span>
              <h2 className="mt-4 max-w-[24ch] text-[28px] leading-[1.1] md:text-[36px]">{p.factSheet.title}</h2>
            </FadeUp>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {p.factSheet.items.map((it, i) => (
                <FadeUp key={i} delay={i * 60}>
                  <div className="v-card h-full">
                    <div className="font-serif text-[36px] leading-none text-vertex-navy">{it.v}</div>
                    <div className="mt-3 text-[13px] uppercase tracking-[0.1em] text-vertex-muted">{it.k}</div>
                    {it.d && <p className="mt-3 text-[14px] leading-relaxed text-vertex-slate">{it.d}</p>}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Media kit */}
        <section className="border-y border-vertex-line bg-vertex-offwhite py-20 lg:py-24">
          <div className="container-v">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <FadeUp>
                <div>
                  <span className="eyebrow">{p.kit.eyebrow}</span>
                  <h2 className="mt-4 max-w-[26ch] text-[28px] leading-[1.1] md:text-[36px]">{p.kit.title}</h2>
                  <p className="mt-4 max-w-[58ch] text-[15px] text-vertex-muted">{p.kit.intro}</p>
                </div>
              </FadeUp>
              <FadeUp delay={80}>
                <a href={LOGO} download="vertex-congo-logo.jpg" target="_blank" rel="noopener noreferrer" className="v-btn-primary">
                  <Download className="h-4 w-4" strokeWidth={1.5} /> {p.kit.downloadAll}
                </a>
              </FadeUp>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Logo card */}
              <FadeUp>
                <div className="v-card h-full">
                  <div
                    className="h-32 w-full rounded-md bg-white ring-1 ring-vertex-line"
                    style={{
                      backgroundImage: `url(${LOGO})`,
                      backgroundSize: '160% 160%',
                      backgroundPosition: 'center 52%',
                      backgroundRepeat: 'no-repeat',
                    }}
                    aria-label="Logo Vertex Développement"
                  />
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-vertex-muted"><ImageIcon className="h-4 w-4" strokeWidth={1.5} /> Logo primaire</div>
                  <h3 className="mt-1.5 font-serif text-[18px] text-vertex-navy">{p.kit.logoTitle}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-vertex-muted">{p.kit.logoDesc}</p>
                  <a href={LOGO} download="vertex-congo-logo.jpg" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-vertex-blue hover:text-vertex-blue-dark">
                    <Download className="h-3.5 w-3.5" strokeWidth={1.5} /> JPG
                  </a>
                </div>
              </FadeUp>

              {/* Logo mono card (SVG-style rendering) */}
              <FadeUp delay={80}>
                <div className="v-card h-full">
                  <div className="flex h-32 items-center justify-center rounded-md bg-vertex-navy">
                    <span className="font-serif text-[36px] tracking-tight text-white">VERTEX Congo</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-vertex-muted"><ImageIcon className="h-4 w-4" strokeWidth={1.5} /> Wordmark monochrome</div>
                  <h3 className="mt-1.5 font-serif text-[18px] text-vertex-navy">{p.kit.wordmarkTitle}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-vertex-muted">{p.kit.wordmarkDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-vertex-muted/70">
                    <FileText className="h-3.5 w-3.5" strokeWidth={1.5} /> {p.kit.onRequest}
                  </span>
                </div>
              </FadeUp>

              {/* Fact sheet PDF card */}
              <FadeUp delay={160}>
                <div className="v-card h-full">
                  <div className="flex h-32 items-center justify-center rounded-md bg-vertex-tint">
                    <FileText className="h-12 w-12 text-vertex-blue" strokeWidth={1.2} />
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-vertex-muted"><FileText className="h-4 w-4" strokeWidth={1.5} /> Document</div>
                  <h3 className="mt-1.5 font-serif text-[18px] text-vertex-navy">{p.kit.factSheetTitle}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-vertex-muted">{p.kit.factSheetDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-vertex-muted/70">
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> {p.kit.onRequest}
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Colours + typography */}
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <FadeUp>
                <div className="v-card">
                  <span className="eyebrow">{p.kit.paletteEyebrow}</span>
                  <h3 className="mt-3 font-serif text-[20px] text-vertex-navy">{p.kit.paletteTitle}</h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-5">
                    {[
                      { c: '#1B6FD4', n: 'Vertex Blue' },
                      { c: '#125399', n: 'Blue Dark' },
                      { c: '#5BA9E8', n: 'Sky Blue' },
                      { c: '#0A1F44', n: 'Navy' },
                      { c: '#F8FAFC', n: 'Off-white' },
                    ].map((sw) => (
                      <div key={sw.c}>
                        <div className="h-14 w-full rounded-md ring-1 ring-vertex-line" style={{ background: sw.c }} />
                        <div className="mt-2 text-[11px] text-vertex-navy">{sw.n}</div>
                        <div className="font-mono text-[10px] text-vertex-muted">{sw.c}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={80}>
                <div className="v-card">
                  <span className="eyebrow">{p.kit.typoEyebrow}</span>
                  <h3 className="mt-3 font-serif text-[20px] text-vertex-navy">{p.kit.typoTitle}</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="font-serif text-[32px] leading-none text-vertex-navy">DM Serif Display</div>
                      <div className="mt-1 text-[12px] text-vertex-muted">Titres · 400</div>
                    </div>
                    <div>
                      <div className="text-[20px] text-vertex-navy">DM Sans — corps de texte</div>
                      <div className="mt-1 text-[12px] text-vertex-muted">UI & lecture · 400 / 500 / 600</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Press contact */}
        <section className="bg-white py-20 lg:py-24">
          <div className="container-v">
            <div className="mx-auto max-w-3xl rounded-xl border border-vertex-line bg-vertex-navy p-10 text-white">
              <FadeUp>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-vertex-sky">{p.contact.eyebrow}</span>
                <h2 className="mt-4 font-serif text-[30px] leading-tight text-white md:text-[36px]">{p.contact.title}</h2>
                <p className="mt-4 max-w-[52ch] text-[15px] text-white/65">{p.contact.desc}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={`mailto:${p.contact.email}`} className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-[14px] font-medium text-vertex-navy transition-all hover:bg-vertex-sky hover:text-white">
                    <Mail className="h-4 w-4" strokeWidth={1.5} /> {p.contact.email}
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition-all hover:border-white/60">
                    {p.contact.formCta} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default PressPage
