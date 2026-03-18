export const routing = {
  locales: ['en', 'es'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'as-needed' as const,
}

export type Locale = typeof routing.locales[number]
