import { ReactElement } from 'react'
import ItesBanner from './ItesBanner/page'
import ItesProducts from './ItesProducts/page'

const ItesPage = (): ReactElement => {

  return (
    <div className='custom-gredient-bg'>
        <ItesBanner />   
        <ItesProducts /> 
    </div>
  )
}

export default ItesPage