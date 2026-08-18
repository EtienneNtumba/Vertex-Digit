'use client'
import { useState } from 'react'
import { X, Upload, Loader2, Send, FileText } from 'lucide-react'
import { toast } from 'sonner'
import { useI18n } from './i18n'

const MAX_MB = 5

export function ApplicationDialog({ position, open, onClose }) {
  const { d, lang } = useI18n()
  const dict = d.pages.careers.application
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [cv, setCv] = useState(null)

  if (!open) return null

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onFile = (e) => {
    const f = e.target.files?.[0]
    if (!f) return setCv(null)
    if (f.size > MAX_MB * 1024 * 1024) {
      toast.error(dict.tooLarge)
      e.target.value = ''
      return setCv(null)
    }
    setCv(f)
  }

  const close = () => {
    if (loading) return
    setDone(false)
    setForm({ name: '', email: '', phone: '', message: '' })
    setCv(null)
    onClose()
  }

  const submit = async (e) => {
    e.preventDefault()
    if (loading) return
    if (!cv) { toast.error(dict.cvRequired); return }
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('phone', form.phone)
      fd.append('message', form.message)
      fd.append('position', position?.t || '')
      fd.append('lang', lang)
      fd.append('cv', cv)
      const res = await fetch('/api/applications', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
      toast.success(dict.success)
      setDone(true)
    } catch (err) {
      toast.error(dict.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-vertex-navy/60 p-4 backdrop-blur-sm md:items-center">
      <div
        className="relative w-full max-w-2xl rounded-xl border border-vertex-line bg-white shadow-2xl"
        style={{ animation: 'fade-up 400ms cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md text-vertex-muted transition-colors hover:bg-vertex-offwhite hover:text-vertex-navy"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="border-b border-vertex-line p-8 pb-6">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h3 className="mt-3 font-serif text-[24px] leading-tight text-vertex-navy md:text-[28px]">{position?.t}</h3>
          <p className="mt-1.5 text-[13px] text-vertex-muted">{position?.loc}</p>
        </div>

        {!done ? (
          <form onSubmit={submit} className="space-y-5 p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={dict.name} value={form.name} onChange={onChange('name')} required />
              <Field label={dict.email} type="email" value={form.email} onChange={onChange('email')} required />
              <Field label={dict.phone} value={form.phone} onChange={onChange('phone')} />
              <div>
                <label className="block text-[12px] font-medium uppercase tracking-[0.12em] text-vertex-muted">{dict.cv} *</label>
                <label
                  className="mt-2 flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-vertex-line bg-vertex-offwhite px-4 py-3 text-[14px] transition-colors hover:border-vertex-blue hover:bg-vertex-tint"
                >
                  <span className="flex items-center gap-2 truncate">
                    {cv ? <FileText className="h-4 w-4 flex-none text-vertex-blue" strokeWidth={1.5} /> : <Upload className="h-4 w-4 flex-none text-vertex-muted" strokeWidth={1.5} />}
                    <span className={`truncate ${cv ? 'text-vertex-navy' : 'text-vertex-muted'}`}>
                      {cv ? cv.name : dict.cvPlaceholder}
                    </span>
                  </span>
                  <input type="file" onChange={onFile} accept=".pdf,.doc,.docx" className="hidden" />
                </label>
                <p className="mt-1.5 text-[11px] text-vertex-muted">{dict.cvHelp}</p>
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-medium uppercase tracking-[0.12em] text-vertex-muted">{dict.message}</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={onChange('message')}
                placeholder={dict.messagePlaceholder}
                className="mt-2 w-full resize-none rounded-md border border-vertex-line bg-white px-4 py-3 text-[15px] text-vertex-navy outline-none transition-colors placeholder:text-vertex-muted/60 focus:border-vertex-blue focus:ring-2 focus:ring-vertex-blue/20"
              />
            </div>
            <div className="flex flex-col-reverse items-stretch gap-3 pt-2 md:flex-row md:items-center md:justify-between">
              <p className="text-[12px] text-vertex-muted">{dict.consent}</p>
              <button type="submit" disabled={loading} className="v-btn-primary disabled:opacity-60">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> : <Send className="h-4 w-4" strokeWidth={1.5} />}
                {dict.submit}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8">
            <div className="rounded-md border border-vertex-health/30 bg-vertex-health/5 p-5">
              <div className="font-medium text-vertex-navy">{dict.successTitle}</div>
              <p className="mt-2 text-[14px] text-vertex-slate">{dict.success}</p>
            </div>
            <button onClick={close} className="v-btn-ghost mt-6">{dict.closeCta}</button>
          </div>
        )}
      </div>
    </div>
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

export default ApplicationDialog
