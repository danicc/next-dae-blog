/* eslint-disable jsx-a11y/no-onchange */
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
`

function LanguageSelector(): JSX.Element {
  const router = useRouter()
  const { locale = 'es' } = router
  const [currentLocale, setCurrentLocale] = useState<string>(locale)

  function handleOnLocaleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const newLocale = e.target.value
    if (locale === newLocale) return
    setCurrentLocale(newLocale)
    router.push('/', '/', { locale: newLocale })
  }

  return (
    <div>
      <Label htmlFor="language">Language</Label>
      <select id="language" value={currentLocale} onChange={handleOnLocaleChange}>
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </div>
  )
}

export default LanguageSelector
