import { ReactElement } from 'react'
import PrintingBanner from './PrintingBanner/page'
import PrintingProducts from './PrintingProducts/page'

const PrintingPage = (): ReactElement => {

  return (
    <div className='custom-gredient-bg'>
        <PrintingBanner />   
        <PrintingProducts /> 
    </div>
  )
}

export default PrintingPage