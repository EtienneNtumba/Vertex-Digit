'use client'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dict } from './dict'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState('fr')

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' && window.localStorage.getItem('vertex_lang')
      if (saved === 'fr' || saved === 'en') setLangState(saved)
      // optional ?lang=en in URL
      if (typeof window !== 'undefined') {
        const p = new URLSearchParams(window.location.search).get('lang')
        if (p === 'fr' || p === 'en') setLangState(p)
      }
    } catch {}
  }, [])

  const setLang = useCallback((l) => {
    setLangState(l)
    try {
      window.localStorage.setItem('vertex_lang', l)
      document.documentElement.lang = l
    } catch {}
  }, [])

  useEffect(() => {
    try { document.documentElement.lang = lang } catch {}
  }, [lang])

  const d = dict[lang] || dict.fr
  return (
    <I18nContext.Provider value={{ lang, setLang, d }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    return { lang: 'fr', setLang: () => {}, d: dict.fr }
  }
  return ctx
}
