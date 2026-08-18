'use client'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function LegalPage() {
  const { d } = useI18n()
  const p = d.pages.legal
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="bg-white py-20 lg:py-24">
          <div className="container-v grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <FadeUp>
                <nav className="sticky top-32 space-y-1 border-l border-vertex-line pl-5 text-[13px]">
                  {p.sections.map((s, i) => (
                    <a key={i} href={`#s-${i}`} className="block py-1.5 text-vertex-muted transition-colors hover:text-vertex-blue">{s.h}</a>
                  ))}
                </nav>
              </FadeUp>
            </aside>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {p.sections.map((s, i) => (
                  <FadeUp key={i} delay={i * 40}>
                    <article id={`s-${i}`} className="scroll-mt-32">
                      <h2 className="font-serif text-[24px] leading-tight text-vertex-navy md:text-[28px]">{s.h}</h2>
                      {s.rows ? (
                        <dl className="mt-5 divide-y divide-vertex-line border-y border-vertex-line">
                          {s.rows.map(([k, v]) => (
                            <div key={k} className="grid grid-cols-1 gap-1 py-3.5 md:grid-cols-3 md:gap-6">
                              <dt className="text-[13px] uppercase tracking-[0.1em] text-vertex-muted">{k}</dt>
                              <dd className="text-[15px] text-vertex-slate md:col-span-2">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : (
                        <p className="mt-4 text-[15px] leading-[1.7] text-vertex-slate">{s.p}</p>
                      )}
                    </article>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={200}>
                <p className="mt-14 text-[13px] text-vertex-muted">{p.updated}</p>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default LegalPage
