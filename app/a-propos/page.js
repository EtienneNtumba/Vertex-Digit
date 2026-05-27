'use client'
import Link from 'next/link'
import { ArrowRight, Globe2, ShieldCheck, Workflow } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function AboutPage() {
  const { d } = useI18n()
  const p = d.pages.about
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
        <section className="bg-white py-24 lg:py-32">
          <div className="container-v grid gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <FadeUp>
                <div className="sticky top-32 space-y-6">
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                      <Globe2 className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 text-[13px] uppercase tracking-[0.15em] text-vertex-muted">Siège</div>
                    <div className="mt-1 text-[15px] text-vertex-navy">Kinshasa — RDC</div>
                  </div>
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                      <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 text-[13px] uppercase tracking-[0.15em] text-vertex-muted">Statut juridique</div>
                    <div className="mt-1 text-[15px] text-vertex-navy">SARL de droit congolais</div>
                  </div>
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                      <Workflow className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 text-[13px] uppercase tracking-[0.15em] text-vertex-muted">Domaine</div>
                    <div className="mt-1 text-[15px] text-vertex-navy">Ingénierie logicielle · Informatique de santé</div>
                  </div>
                </div>
              </FadeUp>
            </aside>
            <div className="lg:col-span-8">
              <div className="space-y-14">
                {p.sections.map((s, i) => (
                  <FadeUp key={i} delay={i * 80}>
                    <article>
                      <h2 className="font-serif text-[28px] leading-tight md:text-[34px]">{s.h}</h2>
                      <p className="mt-5 text-[17px] leading-[1.7] text-vertex-slate">{s.p}</p>
                    </article>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={200}>
                <div className="mt-16 rounded-xl border border-vertex-line bg-vertex-offwhite p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-serif text-[22px] text-vertex-navy">Discutons de votre contexte.</div>
                      <div className="mt-1.5 text-[14px] text-vertex-muted">Première lecture technique sous 48h.</div>
                    </div>
                    <Link href="/contact" className="v-btn-primary">Nous écrire <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></Link>
                  </div>
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

export default AboutPage
