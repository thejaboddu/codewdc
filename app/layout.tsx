import { Inter } from '@next/font/google'
import { TChildrenProps } from 'types/components'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'

import '@/styles/global.scss'

const RootLayout = ({ children }: TChildrenProps) => {

  return (
    <html lang="en">
      <body>
        <Header />
        {/* Wrapping this as the toast container throws a console error */}
        {children}

        <Footer />
      </body>
    </html >
  )
}

export default RootLayout