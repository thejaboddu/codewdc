import { ReactElement } from 'react'
import MachinesBanner from './MachinesBanner/page'
import ManufacturingSetup from './ManufacturingSetup/page'

const PrintingPage = (): ReactElement => {

  return (
    <div className='custom-gredient-bg'>
        <MachinesBanner />   
        <ManufacturingSetup /> 
    </div>
  )
}

export default PrintingPage