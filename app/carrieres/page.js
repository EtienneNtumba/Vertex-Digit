'use client'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function CareersPage() {
  const { d } = useI18n()
  const p = d.pages.careers
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
        <section className="bg-white py-24 lg:py-28">
          <div className="container-v">
            <div className="mb-10">
              <span className="eyebrow">Postes ouverts</span>
            </div>
            <div className="divide-y divide-vertex-line overflow-hidden rounded-xl border border-vertex-line">
              {p.positions.map((pos, i) => (
                <FadeUp key={i} delay={i * 50}>
                  <Link href="/contact" className="group flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-vertex-offwhite md:flex-row md:items-center md:justify-between md:gap-8 md:p-7">
                    <div>
                      <h3 className="font-serif text-[20px] leading-tight text-vertex-navy group-hover:text-vertex-blue md:text-[22px]">{pos.t}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-vertex-muted">
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />{pos.loc}</span>
                        <span>·</span>
                        <div className="flex flex-wrap gap-1.5">
                          {pos.tags.map((t) => (
                            <span key={t} className="rounded-md bg-vertex-tint px-2 py-0.5 text-[11px] text-vertex-blue">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="v-btn-ghost !py-2 !px-4 !text-[13px] group-hover:border-vertex-blue group-hover:text-vertex-blue">Postuler <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} /></span>
                  </Link>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={300}>
              <div className="mt-10 rounded-xl border border-vertex-line bg-vertex-offwhite p-7 text-[15px] text-vertex-slate">
                {p.spontaneous}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CareersPage
