import React from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import enMessages from 'lang/en.json'
import esMessages from 'lang/es.json'

type Props = {
  children: React.ReactNode
}

function I18Provider({ children }: Props): JSX.Element {
  const { locale = 'en' } = useRouter()
  let messages: any = enMessages
  if (locale === 'es') messages = esMessages

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}

export default I18Provider
