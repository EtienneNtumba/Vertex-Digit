'use client'
import { useState } from 'react'
import { Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function ContactPage() {
  const { d, lang } = useI18n()
  const p = d.pages.contact
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
      toast.success(p.form.success)
      setDone(true)
      setForm({ name: '', email: '', org: '', subject: '', message: '' })
    } catch (err) {
      toast.error(p.form.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="bg-white py-20 lg:py-24">
          <div className="container-v grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <FadeUp>
                <div className="space-y-5">
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue"><Mail className="h-5 w-5" strokeWidth={1.5} /></div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.12em] text-vertex-muted">Email</div>
                    <a href={`mailto:${p.info.email}`} className="mt-1 block text-[15px] text-vertex-navy hover:text-vertex-blue">{p.info.email}</a>
                  </div>
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue"><MapPin className="h-5 w-5" strokeWidth={1.5} /></div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.12em] text-vertex-muted">Adresse</div>
                    <div className="mt-1 text-[15px] text-vertex-navy">{p.info.addr}</div>
                  </div>
                  <div className="v-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue"><Clock className="h-5 w-5" strokeWidth={1.5} /></div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.12em] text-vertex-muted">Horaires</div>
                    <div className="mt-1 text-[15px] text-vertex-navy">{p.info.hours}</div>
                  </div>
                </div>
              </FadeUp>
            </aside>

            <div className="lg:col-span-8">
              <FadeUp delay={120}>
                <form onSubmit={onSubmit} className="v-card !p-8 lg:!p-10">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label={p.form.name} value={form.name} onChange={onChange('name')} required />
                    <Field label={p.form.email} type="email" value={form.email} onChange={onChange('email')} required />
                    <Field label={p.form.org} value={form.org} onChange={onChange('org')} />
                    <Field label={p.form.subject} value={form.subject} onChange={onChange('subject')} />
                  </div>
                  <div className="mt-5">
                    <label className="block text-[12px] font-medium uppercase tracking-[0.12em] text-vertex-muted">{p.form.message}</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={onChange('message')}
                      className="mt-2 w-full resize-none rounded-md border border-vertex-line bg-white px-4 py-3 text-[15px] text-vertex-navy outline-none transition-colors focus:border-vertex-blue focus:ring-2 focus:ring-vertex-blue/20"
                    />
                  </div>
                  <div className="mt-7 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-[12px] text-vertex-muted">En envoyant, vous acceptez que nous utilisions ces informations pour vous recontacter.</p>
                    <button type="submit" disabled={loading} className="v-btn-primary disabled:opacity-60">
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> : <Send className="h-4 w-4" strokeWidth={1.5} />}
                      {p.form.submit}
                    </button>
                  </div>
                  {done && (
                    <div className="mt-5 rounded-md border border-vertex-health/30 bg-vertex-health/5 px-4 py-3 text-[14px] text-vertex-health">
                      {p.form.success}
                    </div>
                  )}
                </form>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-[12px] font-medium uppercase tracking-[0.12em] text-vertex-muted">{label}{required ? ' *' : ''}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-md border border-vertex-line bg-white px-4 py-3 text-[15px] text-vertex-navy outline-none transition-colors focus:border-vertex-blue focus:ring-2 focus:ring-vertex-blue/20"
      />
    </div>
  )
}

export default ContactPage
