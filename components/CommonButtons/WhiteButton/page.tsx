import { FC, ReactElement } from 'react'
import NextLink from 'next/link'

const WhiteButton: FC<{
    btnLineLink: string
    btnLineText: string
  }> = ({
    btnLineLink,
    btnLineText
}) :ReactElement => {
  
  return (
    <NextLink href={btnLineLink} className="bg-white text-theme-grey transition text-base rounded-sm py-5 px-4 font-semibold hover:bg-theme-red hover:text-white">{btnLineText}</NextLink>
  )
}

export default WhiteButton