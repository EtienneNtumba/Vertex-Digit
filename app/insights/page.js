'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function InsightsPage() {
  const { d } = useI18n()
  const p = d.pages.insights
  const items = d.home.insights.items
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
        <section className="bg-vertex-offwhite py-24 lg:py-28">
          <div className="container-v">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((post, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <Link href="#" className="v-card group flex h-full flex-col">
                    <div className="flex items-center gap-3 text-[12px] text-vertex-muted">
                      <span className="rounded-full bg-vertex-tint px-2.5 py-1 text-[11px] font-medium text-vertex-blue">{post.tag}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-[20px] leading-tight text-vertex-navy group-hover:text-vertex-blue">{post.title}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-vertex-muted">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-vertex-blue">Lire <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} /></div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default InsightsPage
