import { FC, ReactElement } from 'react'
import NextLink from 'next/link'

const RedButton: FC<{
    btnLineLink: string
    btnLineText: string
    className?: string
  }> = ({
    btnLineLink,
    btnLineText,
    className
}) :ReactElement => {
  
  return (
    <NextLink href={btnLineLink} className={`bg-theme-red text-theme-drakewhite transition text-base rounded-sm py-5 px-4 font-semibold hover:bg-theme-blue ${className}`}>{btnLineText}</NextLink>
  )
}

export default RedButton